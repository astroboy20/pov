export const Validate = (values) => {
  const errors = {};

  if (!values.firstname) {
    errors.firstname = "Required";
  } else if (values.firstName?.length > 15) {
    errors.firstname = "Must be 15 characters or less";
  }
  if (!values.lastname) {
    errors.lastname = "Required";
  } else if (values.lastname?.length > 15) {
    errors.lastname = "Must be 15 characters or less";
  }
  if (!values.middlename) {
    errors.middlename = "Required";
  } else if (values.middlename?.length > 15) {
    errors.middlename = "Must be 15 characters or less";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password = "Must be between 8 and 20 characters long";
  } else if (
    !/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+={}\[\]:;<>.,?])[A-Za-z0-9!@#$%^&*()_+={}\[\]:;<>.,?]{8,}$/.test(
      values.password
    )
  ) {
    errors.password =
      "Password must contain at least one uppercase letter and one special character in the first 8 characters";
  }

  return errors;
};
