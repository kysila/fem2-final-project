import React, { useState } from 'react';
import validator from 'validator';

function RegisterForm() {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    login: '',
    email: '',
    password: '',
    telephone: '',
    gender: '',
    avatarUrl: '',
    isAdmin: false,
  });

  const validate = () => true;
  const onSubmit = (event) => {
    event.preventDefault();
  };


  return (
    <React.Fragment></React.Fragment>
  );
}

export function RegisterModal() {
  return (
    <RegisterForm />
  );
}
