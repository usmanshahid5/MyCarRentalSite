import * as React                     from 'react';
import Avatar                         from '@mui/material/Avatar';
import Button                         from '@mui/material/Button';
import CssBaseline                    from '@mui/material/CssBaseline';
import TextField                      from '@mui/material/TextField';
import FormControlLabel               from '@mui/material/FormControlLabel';
import Checkbox                       from '@mui/material/Checkbox';
import Link                           from '@mui/material/Link';
import Paper                          from '@mui/material/Paper';
import Box                            from '@mui/material/Box';
import Grid                           from '@mui/material/Grid';
import LockOutlinedIcon               from '@mui/icons-material/LockOutlined';
import Typography                     from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './SignIn.css';
import { NavLink }                    from 'react-router-dom';
import {FaFacebookF}         from 'react-icons/fa';
import GoogleAuth                     from '../Google Auth/GoogleAuth';
import ResponsiveAppBar               from '../navbar/navbar';

const theme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={ theme }>
      <ResponsiveAppBar/>
      <Grid style={ { textAlign: "center" } } container component="main" sx={ { height: '100vh' } }>
        <CssBaseline/>
        <Grid
          item
          xs={ false }
          sm={ 4 }
          md={ 7 }
          className="Signin"
          sx={ {
            backgroundRepeat: 'no-repeat',
            // backgroundColor: (t) =>
            //   t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          } }
        />
        <Grid item xs={ 12 } sm={ 8 } md={ 5 } component={ Paper } elevation={ 6 } square>
          <Box
            sx={ {
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            } }
          >
            <Avatar sx={ { m: 1, bgcolor: 'secondary.main' } }>
              <LockOutlinedIcon/>
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={ handleSubmit } sx={ { mt: 1 } }>
              <TextField
                margin="normal"
                required
                // fullWidth
                style={ { width: "70%" } }
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                style={ { width: "70%" } }
                // fullWidth="70%"
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={ <Checkbox value="remember" color="primary"/> }
                label="Remember me"
                style={ { marginRight: "42%" } }
              />
              <Button
                type="submit"
                style={ { width: "70%" } }
                fullWidth
                variant="contained"
                sx={ { mt: 3, mb: 2 } }
              >
                <NavLink
                  to='/main'
                  style={{color:"white"}}

                >
                  Sign In</NavLink>
              </Button>
              <div style={{marginTop:"3%", margin:"auto"}}>
                <h5>Or</h5>
                <div style={{marginTop:"5%", display:"flex", flexWrap:"wrap", justifyContent:"center", alignItems:"center"}}>

                 <div><FaFacebookF style={{height:"30px", width:"30px"}}/></div><div style={{marginLeft:"70px"}}><GoogleAuth/></div>

                {/*<MdEmail style={{height:"25px", width:"25px", marginLeft:"70px"}}/>*/}

                </div>
              </div>
            </Box>
          </Box>

          <Grid item>
            <Link href="#" variant="body2">
              <NavLink
                to='/Signup'

              >
                { "Don't have an account? Sign Up" }
              </NavLink>
            </Link>
          </Grid>

        </Grid>
      </Grid>
    </ThemeProvider>
  );
}