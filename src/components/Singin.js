import React from "react";
import { Avatar, Button, CssBaseline, TextField, Grid, Typography, Container, Link } from '@material-ui/core';
import { useSingin } from "../hooks/useSingin";
import { SinginStyle } from "../theme/SinginStyle";


const Singin = () => {
  
  const {
    values,
    handleInputChange,
    handleSubmit,
  } = useSingin();

  const { classes } = SinginStyle();
  

  return (
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            <TextField
                autoComplete="fname"
                value={values.firstName}
                name="firstName"
                variant="outlined"
                required
                onChange={handleInputChange}
                fullWidth
                label="First Name"
                type="text"
                autoFocus
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                value={values.lastName}
                fullWidth
                onChange={handleInputChange}
                label="Last Name"
                name="lastName"
                id="lastName"
                type="text"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                value={values.email}
                fullWidth
                onChange={handleInputChange}
                label="Email Address"
                name="email"
                type="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                value={values.password}
                fullWidth
                onChange={handleInputChange}
                name="password"
                label="Password"
                type="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
  
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          > Sing in
          </Button>
              <Grid item>
                <Link href="/login" variant="body2">
                  {"you have an account? Login"}
                </Link>
            </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Singin;