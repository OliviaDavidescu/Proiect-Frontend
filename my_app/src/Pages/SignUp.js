import React from 'react';
import {useState,setState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider } from '@mui/material/styles';
import RegistrationFormCl from '../lib/RegistrationFormCl';
import RegistrationFormOrg from '../lib/RegistrationFormOrg';
import "./SignUp.css";
import Axios from 'axios';


function SignUp() {
	const theme = createTheme({
		palette:{
			background: {
				default: "#ffffff",
			},
			primary:{
				light: '#d1e8e2',
				main: '#116466',
				dark: '#2c3531',
				},
			secondary:{
				light: '#ffcb9a',
				main: '#ab9353',
				},
		},
	});

	const [firstnameReg, setFirstnameReg] = useState("");
	const [lastnameReg, setLastnameReg] = useState("");
	const [emailReg, setEmailReg] = useState("");
	const [passwordReg, setPasswordReg] = useState("");
	const [count, setCount] = useState(6);

	const register = () => {
		Axios.post("http://localhost:3001/signup", {
			firstname: firstnameReg,
			lastname: lastnameReg,
			email: emailReg,
			password: passwordReg,
			id: count,
		}).then((response) => {
			console.log(response);
		})
	};


	const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstnameReg(value);
        }
        if(id === "lastName"){
            setLastnameReg(value);
        }
        if(id === "email"){
            setEmailReg(value);
        }
        if(id === "password"){
            setPasswordReg(value);
        }

    }


    return (
		<div className='regform'>
		<ThemeProvider theme={theme}>
		<Container component="main" maxWidth="xs">
			<CssBaseline />
		<Box
			sx={{
				marginTop: 8,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
		<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
			<LockOutlinedIcon />
		  </Avatar>
		  <Typography component="h1" variant="h5">
		  	Client Sign Up
		  </Typography>
		  <Box component="form" noValidate sx={{ mt: 1 }}>
			<TextField
              value={firstnameReg} onChange = {(e) => handleInputChange(e)}
			  margin="normal"
			  required
			  fullWidth
			  id="firstName"
			  label="First Name"
			  name="first name"
			  autoComplete="First Name"
			  autoFocus
			/>
			<TextField
              value={lastnameReg} onChange = {(e) => handleInputChange(e)}
			  margin="normal"
			  required
			  fullWidth
			  id="lastName"
			  label="Last Name"
			  name="last name"
			  autoComplete="Last Name"
			  autoFocus
			/>
			<TextField
              value={emailReg} onChange = {(e) => handleInputChange(e)}
			  margin="normal"
			  required
			  fullWidth
			  id="email"
			  label="Email Address"
			  name="email"
			  autoComplete="email"
			  autoFocus
			/>
			<TextField
              value={passwordReg} onChange = {(e) => handleInputChange(e)}
			  margin="normal"
			  required
			  fullWidth
			  name="password"
			  label="Password"
			  type="password"
			  id="password"
			  autoComplete="current-password"
			/>
			<TextField
			  margin="normal"
			  required
			  fullWidth
			  name="confirm password"
			  label="Confirm Password"
			  type="password"
			  id="confirm password"
			  autoComplete="current-password"
			/>
			<FormControlLabel
			  control={<Checkbox value="remember" color="primary" />}
			  label="Remember me"
			/>
			<button className='submitbtn'  onClick={register}>Sign Up</button>
		  </Box>
		</Box>
	  </Container>
	  </ThemeProvider>
	  </div> 
	);
}

export default SignUp;