import React from "react";
import { Avatar, Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography } from "@material-ui/core";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const SignIn = ({ handleChange }) =>
{
    const paperStyle = { padding: 50, height: '50vh', width: '40vh', margin: "20px auto" };
    const btnStyle = { margin: '8px 0' };
    const aStyle = { textDecoration: 'underline', margin: '10px 0' };
    const initialValues = { email: '', password: '', remember: false };
    const onSubmit = (values, props) =>
    {
        console.log(values); setTimeout(() => { props.resetForm(); props.setSubmitting(true) }, 2000)
        const validationSchema = Yup.object().shape({
            email: Yup.string().email('Invalid email').required('Required'),
        });
        return (
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <grid align='center'>
                        <Avatar > <LockOutlinedIcon /></Avatar>
                        <h2>Sign In</h2>
                    </grid>
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
                        {(props) => (
                            <Form>
                                {console.log(props)}
                                <Field as={TextField} label="Email" name="email" placeholder="Enter email" fullWidth required helperText={<ErrorMessage name="email" />} />
                                <Field as={TextField} label="Password" name="password" placeholder="Enter password" type="password" fullWidth required helperText={<ErrorMessage name="password" />} />
                                <Field as={FormControlLabel}
                                    name='remember'
                                    control={
                                        <Checkbox
                                            color="primary"
                                        />
                                    }
                                    label="Remember me"
                                />
                                <Button style={btnStyle} type="submit" color="primary" variant="contained" fullWidth>Sign In</Button>
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
}

export default SignIn;

