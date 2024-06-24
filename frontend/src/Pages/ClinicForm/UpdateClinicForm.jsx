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
import { Label } from "@material-ui/icons";

export default updateClinicApi;


function updateClinicApi()
{       
        const [image, setImage] = useState();
        const [FormData, setFormData] = useState({
            clinicID: '',
            clinicName: '',
            clinicAdd: '',
            clinicEmail: '',
            clinicOpenTime: '',
            clinicCloseTime: '',
            clinicMaxPatients: '',
            clinicMaxTreatments: '',
        });

        const handleFileChange = (event) => {
            const file = Array.from(event.target.files);
            setImage([...image, ...file]);
        };

        useEffect(() => {
        const fetchClinic = async () =>{
            const response = await axios.get(`http://localhost:5000/clinics/${FormData.clinicID}`);
            const [clinicID, clinicName, clinicAdd, clinicEmail, clinicOpenTime, clinicCloseTime, clinicMaxPatients, clinicMaxTreatments] = response.data;
            setFormData ({clinicID, clinicName, clinicAdd, clinicEmail, clinicOpenTime, clinicCloseTime, clinicMaxPatients, clinicMaxTreatments});
            }
        fetchClinic(); 
        },[]);


        const handleInputChange = (event) => {
            const { name, value } = event.target;
            setFormData({
              ...FormData,
              [name]: value,
            });
          };
        
          const handleSubmit = async () => {
            try {
              const response = await UploadImage(image, FormData);
              console.log('Uploaded successfully:', response);
            } catch (error) {
              console.error('Error uploading:', error);
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
                        <form>
                                <input type="text" placeholder="Enter clinic ID" value={FormData.clinicID} onChange={handleInputChange} />
                                <button type="submit">Search</button>
                            </form>
                        <h2>Clinic information</h2>
                    </Grid>
                    <Formik initialValues={intiativeValues} validationSchema={validationSchema} onSubmit={onSubmit} >
                        {(props) => (
                            <Form>
                                <Label label="clinic ID" name="clinicID" placeholder="Enter clinic ID" fullWidth required helperText={<ErrorMessage name="clinicID" />} 
                                defaultValue={FormData.clinicID} 
                                value={FormData.clinicID} onChange={handleInputChange}/>
                                
                                <TextField label="Clinic Name" name="clinicName" placeholder="Enter clinic name" fullWidth required helperText={<ErrorMessage name="clinicName" 
                                defaultValue={FormData.clinicName} />} 
                                value={FormData.clinicName} onChange={handleInputChange} />

                                <TextField label="Address" name="address" placeholder="Enter address" fullWidth required helperText={<ErrorMessage name="address"
                                defaultValue={FormData.clinicAdd} />} 
                                value={FormData.clinicAdd} onChange={handleInputChange}/>
                                <TextField label="Email" name="email" placeholder="Enter email" fullWidth required helperText={<ErrorMessage name="email" />} 
                                defaultValue={FormData.clinicEmail} onChange={handleInputChange} />
                                <Grid container spacing={2}>
                                    <Grid item xs={5}>
                                        <Autocomplete onChange={handleInputChange}
                                            id="disabled-options-demo"
                                            options={timeSlots}
                                            sx={{ width: 150 }}
                                            renderInput={(params) => <TextField {...params} label="Chose open time" />}
                                            defaultValue={FormData.clinicOpenTime} value={FormData.clinicOpenTime}
                                        />
                                    </Grid>
                                    <Grid item xs={5}>
                                        <Autocomplete style={{ marginLeft: '50px' }}
                                            id="disabled-options-demo"
                                            options={timeSlots}
                                            sx={{ width: 150 }}
                                            renderInput={(params) => <TextField {...params} label="Chose close time" />}
                                            defaultValue={FormData.clinicCloseTime} value={FormData.clinicCloseTime} onChange={handleInputChange}
                                        />
                                    </Grid>
                                </Grid>

                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <Field as={TextField} type='Number' label="Number of patient" name="Max_patients_per_slot" placeholder="Enter max patients" fullWidth required helperText={<ErrorMessage name="Max_patients" />} />
                                        defaultValue={FormData.clinicMaxPatients} value={FormData.clinicMaxPatients} onChange={handleInputChange}
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Field as={TextField} type='Number' label="Number of treatments" name="Max_treatsments_per_slot" placeholder="Enter max treatments" fullWidth required helperText={<ErrorMessage name="Max_treatsments" />} />
                                        defaultValue={FormData.clinicMaxTreatments} value={FormData.clinicMaxTreatments} onChange={handleInputChange}
                                    </Grid>
                                </Grid>
                                <input type="file" onChange={handleFileChange} multiple />

                                <Button style={btnStyle} onClick={handleSubmit} type="submit" color="primary" variant="contained" fullWidth>Add</Button>
                            </Form>
                        )}
                    </Formik>
                </Paper>
            </Grid>
        </div>
    );
}

