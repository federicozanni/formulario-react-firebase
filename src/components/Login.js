import React, {useState, useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useForm} from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid';
import Footer from './Footer';
import { Redirect } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



export default function Login() {

  const classes = useStyles();
  

  //generar almacenamiento en localStorage
  let guardarUsers = JSON.parse(localStorage.getItem('userlogin'));
  if(!guardarUsers) {
    guardarUsers = [];
  }
 

  //guardar usuario en el state
  const [userlogin, setUserlogin] = useState(guardarUsers);

  
  //almacenar usuario en localStorage
  useEffect( () => {
    localStorage.setItem('userlogin', JSON.stringify(userlogin));
    }, [userlogin]);
    

  //agregar usuario con su id
  const addUser = (userRegister) => {
    userRegister.id = uuidv4()
    setUserlogin([...userlogin, userRegister])
  }

  //useForm para maximo y minimo de caracteres
  const {register, handleSubmit} = useForm();


  const onSubmit = (data) => {
  addUser(data);
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        </Avatar>
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
        <Grid item xs={12}>
              <TextField
                variant="outlined"
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
            </Grid>
            <Grid item xs={12}>
          <TextField
                variant="outlined"
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
              </Grid>
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
            <Grid item>
              <Link href="/" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Footer />
      </Box>
    </Container>
  );
}