import { Response } from 'express';
import { uploadImages } from '../utils/upload-images';
import { IGetUserAuthInfoRequest } from '../../@types/custom-types';
import mbxGeocoding from '@mapbox/mapbox-sdk/services/geocoding';
import prisma from '../utils/connectDB';
import { v2 as cloudinary } from 'cloudinary';
import 'dotenv/config';

const geocodingClient = mbxGeocoding({
  accessToken: process.env.MAPBOX_SECRET_TOKEN as string,
});

export const createClinicOwner = async (
  req: IGetUserAuthInfoRequest,
  res: Response,
) => {
  try {
    const clinicOwnerName = req.user.username;
    const imageFiles = req.files as Express.Multer.File[];

    const imageUploadResults = await uploadImages(
      imageFiles,
      clinicOwnerName,
      req.body.name,
    );
    const imageUrls = imageUploadResults.map((result) => result.secure_url);
    console.log(imageUrls);

    const {
      name,
      address,
      city,
      country,
      description,
      email,
      phone_number,
      open_time,
      close_time,
      time_slot,
      max_patients_per_slot,
      max_treatments_per_slot,
    } = req.body;
    console.log(req.body);

    // Check if the clinic owner exists
    const clinicOwner = await prisma.clinicOwner.findUnique({
      where: {
        user_id: req.user.id,
      },
    });
    console.log('Clinic Owner: ', clinicOwner);

    if (!clinicOwner) {
      return res.status(404).json({ error: 'Clinic owner not found' });
    }

    const response = await geocodingClient
      .forwardGeocode({
        query: `${address}, ${city}, ${country}`,
        limit: 1,
      })
      .send();

    const newClinic = await prisma.clinic.create({
      data: {
        name,
        address,
        city,
        country,
        description,
        email,
        phone_number,
        open_time: parseInt(open_time),
        close_time: parseInt(close_time),
        time_slot: parseInt(time_slot),
        latitude: parseFloat(
          (response.body.features[0].geometry.coordinates[1] as string) || '0',
        ),
        longitude: parseFloat(
          (response.body.features[0].geometry.coordinates[0] as string) || '0',
        ),
        max_patients_per_slot: parseInt(max_patients_per_slot),
        max_treatments_per_slot: parseInt(max_treatments_per_slot),
        clinic_owner_id: clinicOwner.id,
        imageUrls: imageUrls,
      },
    });

    return res.status(201).json({
      msg: 'Clinic created successfully',
      clinic: newClinic,
      imageUrls,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};

export const updateClinicOwner = async (
  req: IGetUserAuthInfoRequest,
  res: Response,
) => {
  try {
    const updateClinic = req.body;

    const clinicBefore = await prisma.clinic.findFirst({
      where: {
        clinic_owner_id: req.user.id,
      },
    });

    if (!clinicBefore) {
      return res.status(404).json({ error: 'Clinic not found' });
    }

    const deletedImagesPublicIds = clinicBefore.imagePublicIds.filter(
      (publicId) => {
        // Check if the publicId is not in the new imagePublicIds
        return !updateClinic.imagePublicIds.includes(publicId);
      },
    );

    if (deletedImagesPublicIds.length > 0) {
      await cloudinary.api.delete_resources(
        deletedImagesPublicIds,
        function (error, result) {
          if (error) {
            console.error('Error deleting images:', error);
          } else {
            console.log('Images deleted:', result);
          }
        },
      );
    }

    // Check if the address, city, or country has changed
    if (
      updateClinic.address !== clinicBefore.address ||
      updateClinic.city !== clinicBefore.city ||
      updateClinic.country !== clinicBefore.country
    ) {
      const response = await geocodingClient
        .forwardGeocode({
          query: `${updateClinic.address}, ${updateClinic.city}, ${updateClinic.country}`,
          limit: 1,
        })
        .send();

      updateClinic.latitude = parseFloat(
        (response.body.features[0].geometry.coordinates[1] as string) || '0',
      );
      updateClinic.longitude = parseFloat(
        (response.body.features[0].geometry.coordinates[0] as string) || '0',
      );
    }

    // add new images
    const files = req.files as Express.Multer.File[];
    const imageUploadResults = await uploadImages(
      files,
      req.user.username,
      updateClinic.name,
    );
    const imageUrls =
      imageUploadResults.map((result) => result.secure_url) || [];

    updateClinic.imageUrls = [...clinicBefore.imageUrls, ...imageUrls];

    const clinicAfter = await prisma.clinic.update({
      where: {
        id: clinicBefore.id,
      },
      data: updateClinic,
    });

    return res.status(200).json({
      msg: 'Clinic updated successfully',
      clinic: clinicAfter,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};

export const deleteClinicOwner = async (
  req: IGetUserAuthInfoRequest,
  res: Response,
) => {
  try {
    const clinic = await prisma.clinic.findUnique({
      where: {
        id: req.params.id,
        clinic_owner_id: req.user.id,
      },
    });

    if (!clinic) {
      return res.status(404).json({ error: 'Clinic not found' });
    }

    await cloudinary.api.delete_resources(
      clinic.imagePublicIds,
      function (error, result) {
        if (error) {
          console.error('Error deleting images:', error);
        } else {
          console.log('Images deleted:', result);
        }
      },
    );

    await prisma.clinic.delete({
      where: {
        id: clinic.id,
        clinic_owner_id: req.user.id,
      },
    });

    return res.status(200).json({ msg: 'Clinic deleted successfully' });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};
