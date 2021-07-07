import React, { useState, useEffect } from "react";
import { db } from "./Firebase";


const FormEditor = (props) => {

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
    props.addOrEditLink(values); 
  };


  const getLinkById = async (id) => {
    const doc = await db.collection("links").doc(id).get();
    setValues({ ...doc.data() });
  };


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
            value={values.firstName}
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
            value={values.lastName}
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
            value={values.email}
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
            value={values.password}
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