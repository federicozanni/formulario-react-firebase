import React, { useEffect, useState } from "react";
import FormEditor from "./FormEditor";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { db } from "./Firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));

const UserSingin = (props) => {

  const classes = useStyles();

  //state para almacenar un nuevo dato
  const [links, setLinks] = useState([]);

  //state para alcamenar el id actual
  const [currentId, setCurrentId] = useState("");

  //valores iniciales del state
  const initialStateValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };

  //state donde se almacena la data
  const [values, setValues] = useState(initialStateValues);
  

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

  //eliminar dato por su id
  const onDeleteLink = async (id) => {
    if (window.confirm("are you sure you want to delete this link?")) {
      await db.collection("links").doc(id).delete();
      
    }
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

  return (
    <>
      <div className="col-md-4 p-2">
      {currentId === "" ? null : <FormEditor {...{setValues, values, initialStateValues, addOrEditLink, currentId, links }} />}

      </div>
      <div className="col-md-9 p-2">
        {links.length > 0 ?
        links.map((link) => (
          <div className="card mb-1" key={link.id}>
            <div className="card-body">
              
              <div className="d-flex justify-content-between">
                <b>Nombre:</b>
                <td>{link.firstName}</td>
                <b>Apellido:</b>
                <td>{link.lastName}</td>
                <b>Email:</b>
                <td>{link.email}</td>
                <div>
                <div className={classes.root}>
                <Grid container spacing={4}>
                <Grid item xs={6} sm={4}>
                       
                    <Button 
                    variant="contained" 
                    onClick={() => setCurrentId(link.id) }
                    color="primary">
                      Edit
                    </Button>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                  
                  <Button 
                    variant="contained" 
                    color="secondary"
                    onClick={() => onDeleteLink(link.id)}
                    >
                      Delate
                    </Button>
                  </Grid>
                  </Grid>
                   
                    
                </div>
                </div>
                </div>
              </div>
            </div>
        )) : (
          <h4>No Users Registed</h4>
        )}
      </div>
    </>
  );
};

export default UserSingin;