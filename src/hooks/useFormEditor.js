import { useState, useEffect } from "react";
import { db } from "../components/Firebase";

export const useFormEditor = () => {


   //state donde se almacena la data
   const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });


  //maneja el cambio del imput
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };


  //valor del state actual
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addOrEditLink(values); 
  };


  //obtener un dato por su id y establecerlo en el formulario
  const getLinkById = async (id) => {
    const doc = await db.collection("links").doc(id).get();
    setValues({ ...doc.data() });
  };


  //validacion de los botone edit y delate
  useEffect(() => {
      getLinkById(props.currentId);
  }, [props.currentId]);

  

  return {
    values,
    setValues,
    handleInputChange,
  }

}