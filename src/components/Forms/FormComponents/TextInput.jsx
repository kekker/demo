import React from 'react';
import { useField } from 'formik';
import styled from 'styled-components';

import { FormError } from './FormError';
import Label from './Label';

const StyledInput = styled.input`
  width: 100%;
  max-width: 600px;
  padding: 8px 13px;

  font-family: 'Courier';
  border: 1px solid
    ${({ error, touched }) => (touched ? (error ? 'red' : 'green') : 'lightgrey')};
  text-transform: uppercase;
`;

const TextInput = ({ label, isRequired, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <Label
        isRequired={isRequired}
        label={label}
        htmlFor={props.name || props.id}
      />
      <StyledInput
        {...field}
        error={meta.error}
        touched={meta.touched}
        {...props}
      />
      {meta.touched && meta.error ? <FormError>{meta.error}</FormError> : null}
    </>
  );
};

export default TextInput;
