import { useState } from "react";
import { db } from "../config/Firebase";

export const useSingin = () => {

  const initialStateValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };


  const [values, setValues] = useState(initialStateValues);


  const [id, setId] = useState("");


  const addLink = async (linkObject) => {
      if (id === "") {
        await db.collection("links").doc().set(linkObject);
      } setId('');
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    addLink(values);
    setValues({ ...initialStateValues });
  };

  return {
    values,
    handleInputChange,
    handleSubmit,
  }
    
}