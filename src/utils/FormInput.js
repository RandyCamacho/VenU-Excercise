import { useState, useEffect } from "react";

/**
 * handles the input from the form
 * returns { handleChange, handleSubmit, values, errors }
 *
 * @param submitForm used if everything is valid
 * @param validate validates the input with regex
 */

const FormInput = (submitForm, validate) => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [submit, setSubmit] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setErrors(validate(values));
    setSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submit) {
      submitForm(values);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default FormInput;
