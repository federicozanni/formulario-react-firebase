import React, {useState, useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {useForm} from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid';
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Redirect } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    height: '91vh',
  },
  image: {
    backgroundImage: 'url(https://infovideopub.com/wp-content/uploads/2017/05/video-background-paginas-web-1.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(2, 6),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(3),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(1, 0, 2),
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