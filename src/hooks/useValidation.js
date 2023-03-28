import isEmail from 'validator/es/lib/isEmail';
import { useState, useCallback } from 'react';


export default function useValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const input = e.target;
    const { name, value } = input;

    if (name === 'email') {      
      input.setCustomValidity(!isEmail(value)
        ? 'Некорректый формат адреса почты.'
        : '')
    }

    if (name === 'name') {
      input.setCustomValidity(input.validity.patternMismatch
        ? 'Имя должно содержать только латиницу, кириллицу, пробел или дефис.'
        : '')
    }    

    const error = input.validationMessage === 'Please fill in this field.'
      ? 'Пожалуйста, заполните это поле.'
      : input.validationMessage

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: error });
    setIsValid(input.closest('form').checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, setValues, errors, setErrors, isValid, setIsValid, handleChange, resetForm };
}
