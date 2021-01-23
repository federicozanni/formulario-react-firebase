import React, {useState, useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {useForm} from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid';
import { Redirect } from 'react-router-dom';
import Link from '@material-ui/core/Link';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

export default function Header() {

  const classes = useStyles();

  //datos localstorage login
  let guardarUsers = JSON.parse(localStorage.getItem('userlogin'));
  if(!guardarUsers) {
    guardarUsers = [];
}
 
  //state
  const [userlogin, setUserlogin] = useState(guardarUsers);


  useEffect( () => {
    localStorage.setItem('userlogin', JSON.stringify(userlogin));
  }, [userlogin]);


  //Agregar usuario
  const addUser = (userRegister) => {
    userRegister.id = uuidv4()
    setUserlogin([...userlogin, userRegister])
  }


  const delateUsers = id => {
    setUserlogin(userlogin.filter(userRegister => userRegister.id !== id))
  }
    

  
  const {handleSubmit} = useForm();

  const onSubmit = (data, e) => {
  addUser(data);
  e.target.reset();
  console.log(data);
  }

  return (
    
      <AppBar position="static">
        <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
        <Toolbar>
        <Grid item xs={11}>
          <Link color="inherit" href="https://www.wispro.co/">
          Wispro
          </Link>
        </Grid>
         <Grid item xs={2}>
                    <div>
                      {userlogin.length > 0 ? (
                      userlogin.map((userRegister) => (
                          <div key={userRegister.id}>
                                 <Button 
                                    size="small"
                                    variant="contained" 
                                    color="default"
                                    className={classes.button}
                                    onClick={() => {delateUsers(userRegister.id)}}>Logout </Button>

                              {userRegister.email}
                              
                          </div>
                      ))
                      ) : (
                      <Redirect to="/login" />
                      )}
                    </div>
          </Grid>
          <Avatar className={classes.avatar}>
         </Avatar>
        </Toolbar>
        </form>
      </AppBar>
  );
  }
 