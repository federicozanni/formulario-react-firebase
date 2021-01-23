import React, { useState, useEffect } from "react";
import { db } from "./Firebase";


const FormEditor = (props) => {

  //valores iniciales del state
  const initialUpdatedValues = {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
  };

  //state para almacenar los usuarios
  const [NewValues, setNewValues] = useState(initialUpdatedValues);

  //maneja el cambio del imput
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewValues({ ...NewValues, [name]: value });
  };

  //valor del state actual
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addOrEditLink(NewValues); 
    setNewValues({ ...initialUpdatedValues });
  };

  //obtener un dato por su id y establecerlo en el formulario
  const getLinkById = async (id) => {
    const doc = await db.collection("links").doc(id).get();
    setNewValues({ ...doc.data() });
  };


  //validacion de los botone edit y delate
  useEffect(() => {
      getLinkById(props.currentId);
  }, [props.currentId]);

  return (
      <form onSubmit={handleSubmit} >
        <div className="form-group input-group">
          </div>
          <div className="form-group">
          <input
            type="text"
            required
            value={NewValues.firstName}
            name="firstName"
            placeholder="First Name"
            className="form-control"
            onChange={handleInputChange}
          />
          </div>
        <div className="form-group input-group">
          <div className="form-group">
          </div>
          <input
            type="text"
            required
            value={NewValues.lastName}
            name="lastName"
            placeholder="Last Name"
            className="form-control"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
        <input
            type="text"
            required
            value={NewValues.email}
            name="email"
            placeholder="Email"
            className="form-control"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
        <input
            type="password"
            required
            value={NewValues.password}
            name="password"
            placeholder="Password"
            className="form-control"
            onChange={handleInputChange}
          />
        </div>

        <button className="btn btn-primary btn-block">
          Edit User
        </button>
      </form>
  );
};

export default FormEditor;