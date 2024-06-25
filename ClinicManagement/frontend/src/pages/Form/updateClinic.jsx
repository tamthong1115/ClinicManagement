/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useState, useEffect } from "react";
import { Avatar, Button, Checkbox, FormControlLabel, Paper, TextField, Typography, colors } from "@material-ui/core";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Autocomplete from '@mui/material/Autocomplete';
import { Formik, Form, Field, ErrorMessage, validateYupSchema } from 'formik';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import Grid from '@mui/material/Unstable_Grid2';
import axios from "axios";
import * as Yup from 'yup';
import { UploadImage } from "./UploadImage";
import { styled, lighten, darken } from '@mui/system';


export default function updateClinicApi()
{
    const [image, setImage] = useState();
    const [FormData, setFormData] = useState({
        name: ' ',
        address: ' ',
        email: ' ',
        phone_number: ' ',
        city: '',
        country: '',
        open_time: ' ',
        close_time: ' ',
        time_slot: ' ',
        max_patients_per_slot: ' ',
        max_treatments_per_slot: ' ',
        description: '   ',
    });

    const handleFileChange = (event) =>
    {
        const file = Array.from(event.target.files);
        setImage([...image, ...file]);
    };

    useEffect(() =>
    {
        const fetchClinic = async () =>
        {
            const response = await axios.get(`http://localhost:5000/clinics/${FormData.clinicID}`);
            const [name, address, email, phone_number, open_time, close_time, time_slot, max_patients_per_slot, max_treatments_per_slot] = response.data;
            setFormData({ name, address, email, phone_number, open_time, close_time, time_slot, max_patients_per_slot, max_treatments_per_slot });
        }
        fetchClinic();
    }, []);


    const handleInputChange = (event) =>
    {
        const { name, value } = event.target;
        setFormData({
            ...FormData,
            [name]: value,
        });
    };

    const handleSubmit = async () =>
    {
        try
        {
            const response = await UploadImage(image, FormData);
            console.log('Uploaded successfully:', response);
        } catch (error)
        {
            console.error('Error uploading:', error);
        }
    };

    const timeSlots = Array.from(new Array(24 * 2)).map(
        (_, index) =>
            `${index < 20 ? '0' : ''}${Math.floor(index / 2)}:${index % 2 === 0 ? '00' : '30'
            }`,
    );
    const btnStyle = { marginTop: '50px' };
    const paperStyle = { padding: 50, height: '120vh', width: 370, margin: "20px auto" };
    const intiativeValues = { clinicID: ' ', clinicName: '', address: '', email: '', openTime: '', closeTime: '', timePerslot: '', image: '', Max_patients: '', Max_treatsments: '', };
    const validationSchema = Yup.object().shape({

    });
    const onSubmit = (values, props) =>
    {
        console.log(values); setTimeout(() => { props.resetForm(); props.setSubmitting(true) }, 2000)
    };



    return (
        <div>
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar > <AddBusinessIcon /></Avatar>
                        <h2>Clinic information</h2>
                    </Grid>
                    <Formik initialValues={intiativeValues} validationSchema={validationSchema} onSubmit={onSubmit} >
                        {(props) => (
                            <Form>
                                <TextField label="Clinic ID" name="id" fullWidth defaultValue={FormData.id} />

                                <TextField label="Clinic Name" name="name" placeholder="Enter clinic name" fullWidth required helperText={<ErrorMessage name="clinicName"
                                    defaultValue={FormData.name} />}
                                    value={FormData.name} onChange={handleInputChange} />

                                <TextField label="Address" name="address" placeholder="Enter address" fullWidth required helperText={<ErrorMessage name="address"
                                    defaultValue={FormData.address} />}
                                    value={FormData.address} onChange={handleInputChange} />

                                <TextField label="Email" name="email" placeholder="Enter email" fullWidth required helperText={<ErrorMessage name="email" />}
                                    defaultValue={FormData.email} value={FormData.email} onChange={handleInputChange} />
                                <TextField label="Phone number" name="phone_number" placeholder="Enter phone number" fullWidth required helperText={<ErrorMessage name="phone_number" />}
                                    defaultValue={FormData.phone_number} value={FormData.phone_number} onChange={handleInputChange} />

                                <Grid container spacing={3}>
                                    <Grid item xs={6}>
                                        <TextField label="City" name="city" placeholder="Enter city" fullWidth required helperText={<ErrorMessage name="city" />}
                                            defaultValue={FormData.city} value={FormData.city} onChange={handleInputChange} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField label="Country" name="country" placeholder="Enter country" fullWidth required helperText={<ErrorMessage name="country" />}
                                            defaultValue={FormData.country} value={FormData.country} onChange={handleInputChange} />
                                    </Grid>
                                </Grid>

                                <Autocomplete onChange={handleInputChange}
                                    id="disabled-options-demo"
                                    options={timeSlots}
                                    fullWidth
                                    renderInput={(params) => <TextField {...params} label="Chose time per slot" />}
                                    defaultValue={FormData.time_slot} value={FormData.time_slot}
                                />

                                <Grid container spacing={2}>
                                    <Grid item xs={5}>
                                        <Autocomplete onChange={handleInputChange}
                                            id="disabled-options-demo"
                                            options={timeSlots}
                                            sx={{ width: 150 }}
                                            renderInput={(params) => <TextField {...params} label="Chose open time" />}
                                            defaultValue={FormData.open_time} value={FormData.open_time}
                                        />
                                    </Grid>
                                    <Grid item xs={5}>
                                        <Autocomplete style={{ marginLeft: '50px' }}
                                            id="disabled-options-demo"
                                            options={timeSlots}
                                            sx={{ width: 150 }}
                                            renderInput={(params) => <TextField {...params} label="Chose close time" />}
                                            defaultValue={FormData.close_time} value={FormData.close_time} onChange={handleInputChange}
                                        />
                                    </Grid>
                                </Grid>

                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <Field as={TextField} type='Number' label="Number of patient" name="max_patients_per_slot" placeholder="Enter max patients" fullWidth required helperText={<ErrorMessage name="Max_patients" />}
                                            defaultValue={FormData.max_patients_per_slot} value={FormData.max_patients_per_slot} onChange={handleInputChange} />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Field as={TextField} type='Number' label="Number of treatments" name="max_treatments_per_slot" placeholder="Enter max treatments" fullWidth required helperText={<ErrorMessage name="Max_treatsments" />}
                                            defaultValue={FormData.max_treatments_per_slot} value={FormData.max_treatments_per_slot} onChange={handleInputChange} />
                                    </Grid>
                                </Grid>

                                <TextField label="Description" name="description" placeholder="Enter description" fullWidth helperText={<ErrorMessage name="description" />}
                                    defaultValue={FormData.description} value={FormData.description} onChange={handleInputChange} />
                                <input style={{ marginTop: '50px', width: 2000, color: 'white' }} type="file" onChange={handleFileChange} multiple />

                                <Button style={btnStyle} onClick={handleSubmit} type="submit" color="primary" variant="contained" fullWidth>Complete</Button>
                            </Form>
                        )}
                    </Formik>
                </Paper>
            </Grid>
        </div>
    );
}
