/**
 *
 * @param values {values} checks each input value using regex
 *
 * returns errors if any
 */

export default function ValidateInfo(values) {
  let errors = {};

  if (!values.firstName.trim()) {
    errors.firstName = "Please Enter a First Name";
  } else if (!/^[a-zA-Z]+(?:-[a-zA-Z]+)*$/.test(values.firstName)) {
    errors.firstName = "First Name is Invalid";
  }
  if (!values.lastName.trim()) {
    errors.lastName = "Please Enter a Last Name";
  } else if (!/^[a-zA-Z]+(?:-[a-zA-Z]+)*$/.test(values.lastName)) {
    errors.lastName = "Last Name is Invalid";
  }

  if (!values.email.trim()) {
    errors.email = "Please Enter an Email Address";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  return errors;
}
