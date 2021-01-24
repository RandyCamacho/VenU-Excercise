import React from "react";
import "../styles/FormContainer.css";
import FormInput from "../utils/FormInput";
import validate from "../utils/ValidateInfo";
import Logo from "../assets/VenU-Logo-2020.svg";

function FormContainer({ submitForm }) {
  /**
   * Moved Input handling to its own file for simplicity.
   * FormInput.js
   * pass in a validate function as well to validate Input.
   * ValidateInfo.js
   *
   * @param submitForm {Prop} if true submit the form and pass the values to appContainer
   * @param validate {function} validates the input with regex
   * @returns { handleChange, handleSubmit, values, errors } input data needed for the form
   *
   */
  const { handleChange, handleSubmit, values, errors } = FormInput(
    submitForm,
    validate
  );

  return (
    <div className="form_wrapper">
      <div className="form_container">
        <img className="logo" src={Logo} alt="VenU"></img>
        {/* <h2> Please Fill out the Form to Continue</h2> */}
        <form className="form" onSubmit={handleSubmit} noValidate>
          <div className="first_name">
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={values.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <p>{errors.firstName}</p>}
          </div>
          <div className="last_name">
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={values.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <p>{errors.lastName}</p>}
          </div>
          <div className="email">
            <label>Email Address:</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div className="submit">
            <button type="submit">Continue</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormContainer;
