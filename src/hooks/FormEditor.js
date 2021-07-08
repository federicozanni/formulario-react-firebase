import React, { useState, useEffect } from "react";
import { db } from "../config/Firebase";
import { EditorUsers } from "../components/EditorUsers"


export const FormEditor = (props) => {

  const {
    addOrEditLink,
    currentId,
  } = props;

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    addOrEditLink(values); 
  };


  const getLinkById = async (id) => {
    const doc = await db.collection("links").doc(id).get();
    setValues({ ...doc.data() });
  };


  useEffect(() => {
      getLinkById(currentId);
  }, [currentId]);

  
  return (
      <EditorUsers
        values={values}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
  );
};
