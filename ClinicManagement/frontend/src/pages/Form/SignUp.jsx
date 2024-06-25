import React from "react";
import { Avatar, Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography } from "@material-ui/core";
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import { Label } from "@material-ui/icons";

const SignUp = () =>
{
    const [FormData, setFormData] = useState({
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        phone_number: '',
        address: '',
        date_of_birth: '',
        password: '',
    });

    const handleInputChange = (e) =>
    {
        const { name, value } = e.target;
        setFormData({
            ...FormData,
            [name]: value,
        });
    }

    const handleSubmit = async (event) =>
    {
        event.preventDefault();
        try
        {
            const response = await axios.post('ApiDataBase', FormData);
            alert('Sign Up successful');
        } catch
        {
            alert('Sign Up failed');
        }
    }
    const paperStyles = { padding: 60, height: '90vh', width: '60vh', margin: "20px auto" };
    const avatarStyles = { backgroundColor: 'green' };
    const initialValues = { firstName: '', lastName: '', email: '', phone: '', password: '', confirmPassword: '' };
    const onSubmit = (values, props) => { console.log(values); }
    const ValidationShema = Yup.object().shape({
        firstname: Yup.string().min(2, 'Too Short!').required('Required'),
        lastname: Yup.string().min(2, 'Too Short!').required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        phone: Yup.number().typeError('Enter valid phone number').required('Required'),
        password: Yup.string().min(8, 'Password is too short - should be 8 chars minimum.').required('Required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required')
    });


    return (
        <Grid>
            <Paper elevation={20} style={paperStyles}>
                <Grid align='center'>
                    <Avatar style={avatarStyles}>
                        <PersonAddAltOutlinedIcon />
                    </Avatar>
                    <h2 style={{ margin: '0' }}>Sigun Up</h2 >
                    <Typography variant="caption" style={{ fontSize: '20px', textDecoration: 'underline' }}> Fill this form to create account!</Typography>
                </Grid>
                <Formik initialValues={initialValues} validationSchema={ValidationShema} onSubmit={onSubmit} >
                    {(props) => (
                        <Form>
                            <Grid container spacing={3}>
                                <Grid item xs={6}>
                                    <Field as={TextField} name="first_name" label="First Name" placeholder="Enter first name" required helperText={<ErrorMessage name="firstname" />}
                                        value={FormData.first_name} onChange={handleInputChange} />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field as={TextField} name="last_name" label="Last Name" placeholder="Enter last name" required helperText={<ErrorMessage name="lastname" />}
                                        value={FormData.last_name} onChange={handleInputChange} />
                                </Grid>
                            </Grid>
                            <Field as={TextField} label="Username" name="username" placeholder="Enter username" fullWidth required helperText={<ErrorMessage name="username" />} value={FormData.username} onChange={handleInputChange} />
                            <Field as={TextField} label="Email" name="email" placeholder="Enter email" fullWidth required helperText={<ErrorMessage name="email" />} value={FormData.email} onChange={handleInputChange} />
                            <Field as={TextField} label="Phone Number" name="phone" placeholder="Enter phone number" type="number" fullWidth required helperText={<ErrorMessage name="phone" />} value={FormData.phone_number} onChange={handleInputChange} />
                            <Field as={TextField} label="Address" name="address" placeholder="Enter address" fullWidth required helperText={<ErrorMessage name="address" />} value={FormData.address} onChange={handleInputChange} />
                            <Field as={TextField} style={{ marginTop: 10 }} name="date_of_birth" placeholder="Enter date of birth" type="date" helperText={<ErrorMessage name="date_of_birth" />} fullWidth value={FormData.date_of_birth} onChange={handleInputChange} />


                            <Field as={TextField} label="Password" name="password" placeholder="Enter password" type="password" fullWidth required helperText={<ErrorMessage name="password" />} value={FormData.password} onChange={handleInputChange} />
                            <Field as={TextField} label="Confirm Password" name="confirmPassword" placeholder="Confirm password" type="password" fullWidth required helperText={<ErrorMessage name="confirmPassword" />} />
                            <Button style={{ marginTop: '40px' }} onChange={handleSubmit} type="submit" color="primary" variant="contained" fullWidth>Sign Up</Button>
                        </Form>
                    )}
                </Formik>
                <Typography style={{ marginTop: '20px' }}>Already have an account? <a href="#">Sign In</a></Typography>

            </Paper>
        </Grid>
    );
}
export default SignUp;