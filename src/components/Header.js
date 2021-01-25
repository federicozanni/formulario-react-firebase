import React, {useState, useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Redirect } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
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

  
  //eliminar usuario el localStorage
  const delateUsers = id => {
    setUserlogin(userlogin.filter(userRegister => userRegister.id !== id))
  }


  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          <Link color="inherit" href="https://www.wispro.co/">
          Wispro
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