import React, {useState, useEffect} from 'react';
import { Link, Typography, Toolbar, CssBaseline, Button, AppBar, Container } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { HeaderStyle } from '../theme/HeaderStyle';
import { useLogin } from '../hooks/useLogin';



export const Header = () => {

  const {
    userlogin,
    delateUsers,
    } = useLogin();

  const { classes } = HeaderStyle();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          <Link color="inherit" href="https://www.linkedin.com/in/federicozanni/">
          Formulario
          </Link>
          </Typography>
          
          <div>
          {userlogin.length > 0 ? (
            userlogin.map((userRegister) => (
              <div key={userRegister.id}>
                
                {userRegister.email}
                
                  <Button color="primary" 
                          variant="outlined" 
                          className={classes.link}   
                          onClick={() => {delateUsers(userRegister.id)}}
                          > Logout </Button>
          
              </div>
          ))
          ) : (
          <Redirect to="/login" />
          )}
          </div>

        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Welcome
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
        Change, edit or delete registered users on the page
        </Typography>
      </Container>
    </React.Fragment>
  );
}