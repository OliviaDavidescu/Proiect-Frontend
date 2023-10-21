import {useState,setState} from 'react';
import * as React from 'react';
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
import Axios from 'axios';

function RegistrationFormCl() {
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
				main: '#d9b08c',
				},
		},
	});

    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }

    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            fname: data.get('first name'),
            lname: data.get('last name'),
            email: data.get('email'),
            password: data.get('password'),
            confirmpassword: data.get('confirm password'),
        });
    };

	const register = () => {
		Axios.post("http://localhost3001/signup", {
			fname: firstName,
			lname: lastName,
			email: email,
			password: password,
			confirmpassword: confirmPassword,
		}).then((response) => {
			console.log(response);
		})
	};

    return (
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
		  <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
			<TextField
              value={firstName} onChange = {(e) => handleInputChange(e)}
			  margin="normal"
			  required
			  fullWidth
			  id="first name"
			  label="First Name"
			  name="first name"
			  autoComplete="First Name"
			  autoFocus
			/>
			<TextField
              value={lastName} onChange = {(e) => handleInputChange(e)}
			  margin="normal"
			  required
			  fullWidth
			  id="last name"
			  label="Last Name"
			  name="last name"
			  autoComplete="Last Name"
			  autoFocus
			/>
			<TextField
              value={email} onChange = {(e) => handleInputChange(e)}
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
              value={password} onChange = {(e) => handleInputChange(e)}
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
              value={confirmPassword} onChange = {(e) => handleInputChange(e)}
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
			<Button
			  type="submit"
			  fullWidth
			  variant="contained"
			  sx={{ mt: 3, mb: 2 }}
			  onClick={register}
			>
			 Sign Up
			</Button>
		  </Box>
		</Box>
	  </Container>
	  </ThemeProvider>
	);
}

export default RegistrationFormCl;