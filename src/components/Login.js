import React from 'react';
import { Avatar, Button, CssBaseline, TextField, Grid, Typography, Paper, Link, FormControlLabel, Checkbox } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin';
import { LoginStyle } from '../theme/LoginStyle';


export const Login = () => {
  
  const {
    userlogin,
    register,
    onSubmit,
    handleSubmit, 
    } = useLogin();

    const { classes } = LoginStyle();

  
  return (
    <Grid container component="main" className={classes.root}>
    <CssBaseline />
    <Grid item xs={false} sm={4} md={7} className={classes.image} />
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={0}>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        </Avatar>
        <Typography component="h1" variant="h5">
            WELCOME
        </Typography>
        <form className={classes.form}  onSubmit={handleSubmit(onSubmit)}>
          <TextField
           variant="outlined"
           autoFocus
           margin="normal"
            required
            inputRef={register({
              minLength: {value: 2, message: 'minimo 2 letras'},
              maxLength: {value: 30, message: 'maximo 18 letras'}
            })}
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            type="email"
            autoComplete="email"
          />
          <TextField
            variant="outlined"
            autoFocus
            margin="normal"
            required
            inputRef={register({
              minLength: {value: 4, message: 'minimo 2 caracteres'},
              maxLength: {value: 18, message: 'maximo 10 caracteres'}
            })}
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
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
            color="primary"
            className={classes.submit}
          >
            Login
          
              <div> 
                  {userlogin.length > 0 ? (
                    <Redirect to="/menu" />
                    ) : null
                        }
              </div>
          </Button>
          <Grid container>
            <Grid item xs>
               <Link href="/" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Grid>
  </Grid>
  );
}