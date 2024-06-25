import React from "react";
import { Avatar, Button, Checkbox, FormControlLabel, Paper, TextField, Typography, colors } from "@material-ui/core";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage, validateYupSchema } from 'formik';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import Grid from '@mui/material/Unstable_Grid2';
import axios from "axios";
import { UploadImage } from "./UploadImage";
import * as Yup from 'yup';


const CreateClinic = () =>
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

    const handleFileChange = (event) => { const file = Array.from(event.target.files); setImage([...image, ...file]); };

    const handleInputChange = (event) =>
    {
        const { name, value } = event.target;
        setFormData({
            ...FormData,
            [name]: value
        });
    };

    const handleSubmit = async () =>
    {
        try
        {
            const response = await UploadImage(image, FormData);
            console.log('Successfully:', response);
        } catch (error)
        {
            console.error('Error:', error);
        }
    };


    const timeSlots = Array.from(new Array(24 * 2)).map(
        (_, index) =>
            `${index < 20 ? '0' : ''}${Math.floor(index / 2)}:${index % 2 === 0 ? '00' : '30'
            }`,
    );


    const btnStyle = { marginTop: '50px' };

    const paperStyle = { padding: 50, height: '95vh', width: 370, margin: "20px auto" };

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
                        <h2>Add new clinic</h2>
                    </Grid>
                    <Formik initialValues={intiativeValues} validationSchema={validationSchema} onSubmit={onSubmit} >
                        {(props) => (
                            <Form>
                                {console.log(props)}
                                <Field as={TextField} label="Clinic Name" name="name" placeholder="Enter clinic name" fullWidth required helperText={<ErrorMessage name="clinicName" />} value={FormData.name} onChange={handleInputChange} />
                                <Field as={TextField} label="Address" name="address" placeholder="Enter address" fullWidth required helperText={<ErrorMessage name="address" />} value={FormData.address} onChange={handleInputChange} />
                                <Field as={TextField} label="Email" name="email" placeholder="Enter email" fullWidth required helperText={<ErrorMessage name="email" />} value={FormData.email} onChange={handleInputChange} />
                                <Field as={TextField} label="phone_number" name="phone_number" placeholder="Enter phone number" fullWidth required helperText={<ErrorMessage name="phone_number" />}
                                    value={FormData.phone_number} onChange={handleInputChange} />

                                <Grid container spacing={3}>
                                    <Grid item xs={6}>
                                        <Field as={TextField} label="City" name="city" placeholder="Enter city" fullWidth required helperText={<ErrorMessage name="city" />} value={FormData.city} onChange={handleInputChange} />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Field as={TextField} label="Country" name="country" placeholder="Enter country" fullWidth required helperText={<ErrorMessage name="country" />} value={FormData.country} onChange={handleInputChange} />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3}>
                                    <Grid item xs={6}>
                                        <Autocomplete onChange={handleInputChange}
                                            id="disabled-options-demo"
                                            options={timeSlots}
                                            fullWidth value={FormData.open_time}
                                            renderInput={(params) => <TextField {...params} label="Chose open time" />}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Autocomplete value={FormData.close_time} onChange={handleInputChange}
                                            id="disabled-options-demo"
                                            options={timeSlots}
                                            fullWidth
                                            renderInput={(params) => <TextField {...params} label="Chose close time" />}
                                        />
                                    </Grid>
                                </Grid>

                                <Grid container spacing={3}>
                                    <Grid item xs={6}>
                                        <Field as={TextField} label="Number of patient" name="Max_patients" placeholder="Enter max patients" fullWidth required helperText={<ErrorMessage name="Max_patients" />} />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Field as={TextField} label="Number of treatments" name="Max_treatsments" placeholder="Enter max treatments" fullWidth required helperText={<ErrorMessage name="Max_treatsments" />} />
                                    </Grid>
                                </Grid>
                                <Field as={TextField} label="Description" name="description" placeholder="Enter description" fullWidth helperText={<ErrorMessage name="description" />} value={FormData.description} onChange={handleInputChange} />
                                <input style={{ marginTop: 50 }} type="file" onChange={handleFileChange} />
                                <Button style={btnStyle} type="submit" color="primary" variant="contained" fullWidth onChange={handleSubmit} >Create Clinic</Button>
                            </Form>
                        )}
                    </Formik>
                </Paper>
            </Grid>
        </div>
    );
}
export default CreateClinic;
