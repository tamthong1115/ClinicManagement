import React from "react";
import { Avatar, Button, Checkbox, FormControlLabel, Paper, TextField, Typography, colors } from "@material-ui/core";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage, validateYupSchema } from 'formik';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import Grid from '@mui/material/Unstable_Grid2';
import * as Yup from 'yup';


const CreateClinic = () =>
{
    const timeSlots = Array.from(new Array(24 * 2)).map(
        (_, index) =>
            `${index < 20 ? '0' : ''}${Math.floor(index / 2)}:${index % 2 === 0 ? '00' : '30'
            }`,
    );
    const [disableTime, setDisableTime] = useState(null);
    const handleChange = (selectedTime) =>
    {
        disableTime === selectedTime ? setDisableTime(null) : setDisableTime(selectedTime);
    }
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
                                <Field as={TextField} label="clinic ID" name="clinicID" placeholder="Enter clinic ID" fullWidth required helperText={<ErrorMessage name="clinicID" />} />
                                <Field as={TextField} label="Clinic Name" name="clinicName" placeholder="Enter clinic name" fullWidth required helperText={<ErrorMessage name="clinicName" />} />
                                <Field as={TextField} label="Address" name="address" placeholder="Enter address" fullWidth required helperText={<ErrorMessage name="address" />} />
                                <Field as={TextField} label="Email" name="email" placeholder="Enter email" fullWidth required helperText={<ErrorMessage name="email" />} />
                                <Grid container spacing={2}>
                                    <Grid item xs={5}>
                                        <Autocomplete onChange={handleChange}
                                            id="disabled-options-demo"
                                            options={timeSlots}
                                            getOptionDisabled={(option) =>
                                                option === disableTime
                                            }
                                            sx={{ width: 150 }}
                                            renderInput={(params) => <TextField {...params} label="Chose open time" />}
                                        />
                                    </Grid>
                                    <Grid item xs={5}>
                                        <Autocomplete style={{ marginLeft: '50px' }}
                                            id="disabled-options-demo"
                                            options={timeSlots}
                                            getOptionDisabled={(option) =>
                                                option === disableTime
                                            }
                                            sx={{ width: 150 }}
                                            renderInput={(params) => <TextField {...params} label="Chose close time" />}
                                        />
                                    </Grid>
                                </Grid>

                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <Field as={TextField} label="Number of patient" name="Max_patients" placeholder="Enter max patients" fullWidth required helperText={<ErrorMessage name="Max_patients" />} />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Field as={TextField} label="Number of treatments" name="Max_treatsments" placeholder="Enter max treatments" fullWidth required helperText={<ErrorMessage name="Max_treatsments" />} />
                                    </Grid>
                                </Grid>
                                <Button style={btnStyle} type="submit" color="primary" variant="contained" fullWidth>Create Clinic</Button>
                            </Form>
                        )}
                    </Formik>
                </Paper>
            </Grid>
        </div>
    );
}
export default CreateClinic;
