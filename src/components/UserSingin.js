import React, { useEffect, useState } from "react";
import FormEditor from "./FormEditor";
import {Table, TableContainer, TableCell, TableBody, TableRow, Button} from '@material-ui/core';
import { db } from "./Firebase";


const UserSingin = () => {


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
      if (currentId === "") {
        await db.collection("links").doc().set(linkObject);
      } else {
        await db.collection("links").doc(currentId).update(linkObject);
        setCurrentId("");
      }
  };

  
  return (
    <>
     <div className="col-md-4 p-2">
      {currentId === "" ? null : 
        <FormEditor 
          currentId={currentId}
          addOrEditLink={addOrEditLink}
          links={links}
        />}

      </div>
    <TableContainer>
       <Table>
          {links.length > 0 ?
            links.map((link) => (
          <TableBody>
            <TableRow key={link.id}>
             <TableCell><b>Name:</b></TableCell>
             <TableCell>{link.firstName}</TableCell>
             <TableCell><b>Last Name:</b></TableCell>
             <TableCell>{link.lastName}</TableCell>
             <TableCell><b>Email:</b></TableCell>
             <TableCell>{link.email}</TableCell>
               
               <TableCell>
               <Button 
                    variant="contained" 
                    onClick={() => setCurrentId(link.id) }
                    color="primary">
                      Edit
                    </Button>
                 &nbsp;&nbsp;&nbsp;
                 <Button 
                    variant="contained" 
                    color="secondary"
                    onClick={() => onDeleteLink(link.id)}
                    >
                      Delate
                    </Button>
                 </TableCell>
             </TableRow>
            </TableBody>
           )) : (
            <h4>No Users Registed</h4>
          )}
         
       </Table>
     </TableContainer>

    </>
  );
};

export default UserSingin;