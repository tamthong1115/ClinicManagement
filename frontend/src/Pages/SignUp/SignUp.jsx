import React from "react";
import { Avatar, Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography } from "@material-ui/core";
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import { Formik, Form, Field, ErrorMessage, validateYupSchema } from 'formik';
import * as Yup from 'yup';

const SignUp = () =>
{
    const paperStyles = { padding: 60, height: '75vh', width: '60vh', margin: "20px auto" };
    const avatarStyles = { backgroundColor: 'green' };
    const divideName = { width: '214px', margin: '5px' };
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
                            <Field as={TextField} style={divideName} name="firstname" label="First Name" placeholder="Enter first name" required helperText={<ErrorMessage name="firstname" />} />
                            <Field as={TextField} style={divideName} name="lastname" label="Last Name" placeholder="Enter last name" required helperText={<ErrorMessage name="lastname" />} />
                            <Field as={TextField} label="Email" name="email" placeholder="Enter email" fullWidth required helperText={<ErrorMessage name="email" />} />
                            <Field as={TextField} label="Phone Number" name="phone" placeholder="Enter phone number" type="number" fullWidth required helperText={<ErrorMessage name="phone" />} />
                            <Field as={TextField} label="Password" name="password" placeholder="Enter password" type="password" fullWidth required helperText={<ErrorMessage name="password" />} />
                            <Field as={TextField} label="Confirm Password" name="confirmPassword" placeholder="Confirm password" type="password" fullWidth required helperText={<ErrorMessage name="confirmPassword" />} />
                            <Button style={{ marginTop: '40px' }} type="submit" color="primary" variant="contained" fullWidth>Sign Up</Button>
                        </Form>
                    )}
                </Formik>
                <Typography style={{ marginTop: '20px' }}>Already have an account? <a href="#">Sign In</a></Typography>

            </Paper>
        </Grid>
    );
}

export default SignUp;