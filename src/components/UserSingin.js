import React from "react";
import { useUserSing } from "../hooks/useUserSing";
import {Table, TableContainer, TableCell, TableBody, TableRow, Button} from '@material-ui/core';
import { FormEditor } from "../hooks/FormEditor";


export const UserSingin = () => {

  const {
    links,
    currentId,
    setCurrentId,
    onDeleteLink,
    addOrEditLink,
  } = useUserSing();
  
  
  return (
    <>
     <div className="col-md-4 p-2">
      {
        currentId === "" 
        ? null 
        : <FormEditor
            currentId={currentId}
            addOrEditLink={addOrEditLink}
            links={links}
          />
      }

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
