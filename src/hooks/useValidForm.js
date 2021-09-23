import { useState, useCallback } from 'react';

export default function useValidForm() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValidForm, setValidForm] = useState(false);

  const handleChange = (evt) => {
    const input = evt.target;
    const { name } = input;
    const { value } = input;

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: input.validationMessage });
    setValidForm(input.closest('form').checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newValidForm = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setValidForm(newValidForm);
    },
    [setValues, setErrors, setValidForm],
  );

  return {
    values, setValues, errors, isValidForm, handleChange, resetForm,
  };
}

/*
import React, { useCallback } from "./react";

! хук управления формой и валидации формы !

export function useFormWithValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({...values, [name]: value});
    setErrors({...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm };
}
*/