import React, { useEffect } from "react";
import { Avatar, Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography } from "@material-ui/core";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from "axios";



const SignIn = () =>
{
    const [FormData, setFormData] = useState({
        email: '',
        password: '',
        remember: false
    }
    );

    const handleInputChange = (event) =>
    {
        const { name, value, type, checked } = event.target;
        setFormData({
            ...FormData,
            [name]: type === 'checkbox' ? checked : value
        });
    }

    const handleSubmit = async (event) =>
    {
        event.preventDefault();
        try
        {

            const respone = axios.post('http://localhost:3000/user', FormData);
            if (respone.data.success)
            {
                alert('Login successful');
                if (FormData.remember)
                {
                    localStorage.setItem('email', FormData.email);
                    localStorage.setItem('password', FormData.password);
                }
                else
                {
                    sessionStorage.setItem('email', FormData.email);
                    sessionStorage.setItem('password', FormData.password);
                }

            }
            else
            {
                alert('Login failed');
            }
        } catch (error)
        {
            console.error('Error logging in:', error);
            alert('An error occurred during login');
        }

    }

    useEffect(() =>
    {
        const savedEmail = localStorage.getItem('email') || sessionStorage.getItem('email');
        const savedPassword = localStorage.getItem('password') || sessionStorage.getItem('password');
        if (savedEmail && savedPassword)
        {
            setFormData({
                email: savedEmail,
                password: savedPassword,
                rememberMe: !!localStorage.getItem('username')
            });
        }
    }, []);

    const paperStyle = { padding: 50, height: '50vh', width: '40vh', margin: "20px auto" };
    const btnStyle = { margin: '8px 0' };
    const aStyle = { textDecoration: 'underline', margin: '10px 0' };
    const initialValues = { email: '', password: '', remember: false };
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
    });
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar > <LockOutlinedIcon /></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <Formik initialValues={initialValues} validationSchema={validationSchema} >
                    {(props) => (
                        <Form>
                            {console.log(props)}
                            <Field as={TextField} label="Email" name="email" placeholder="Enter email" fullWidth required helperText={<ErrorMessage name="email" />}
                                value={FormData.email} onChange={handleInputChange} />
                            <Field as={TextField} label="Password" name="password" placeholder="Enter password" type="password" fullWidth required helperText={<ErrorMessage name="password" />}
                                value={FormData.password} onChange={handleInputChange} />
                            <Field as={FormControlLabel}
                                name='remember' checked={FormData.remember} onChange={handleInputChange}
                                control={
                                    <Checkbox
                                        color="primary"
                                    />
                                }
                                label="Remember me"
                            />
                            <Button style={btnStyle} onChange={handleSubmit} type="submit" color="primary" variant="contained" fullWidth>Sign In</Button>
                        </Form>
                    )}
                </Formik>

                <Typography>
                    <a style={aStyle} href="#" >
                        Forgot password, click here
                    </a>
                </Typography>
                <Typography> Do you have an account?
                    <a style={aStyle} href="#" >
                        Sign Up
                    </a>
                </Typography>
            </Paper>
        </Grid>
    );
}


export default SignIn;

