import React, { useState, useEffect } from "react";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Footer from './Footer';
import { db } from "./Firebase";
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    }
  },
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Singin = () => {

  const classes = useStyles();
  
   //state para almacenar un nuevo dato
   const [links, setLinks] = useState([]);

   //state para alcamenar el id actual
   const [currentId, setCurrentId] = useState("");
 
   //obtener datos del firebase y almacenarlo en el state
   const getLinks = async () => {
     db.collection("links").onSnapshot((querySnapshot) => {
       const docs = [];
       querySnapshot.forEach((doc) => {
         docs.push({ ...doc.data(), id: doc.id });
       });
       setLinks(docs);
     });
   };

  //manejar datos que cambian en firebase
  useEffect(() => {
    getLinks();
  }, []);

  //agrega o edita un dato en firebase
  const addOrEditLink = async (linkObject) => {
    try {
      if (currentId === "") {
        await db.collection("links").doc().set(linkObject);
      } else {
        await db.collection("links").doc(currentId).update(linkObject);
        setCurrentId("");
      }
    } catch (error) {
      console.error(error);
    }
  };


  const initialStateValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };

  const [values, setValues] = useState(initialStateValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    addOrEditLink(values);
    setValues({ ...initialStateValues });
  };
 

  return (
    <>
      <div className="col-md-4 p-2">
        
      </div>
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
      <Box mt={5}>
        <Footer />
      </Box>
    </Container>
    </>
  );
};

export default Singin;