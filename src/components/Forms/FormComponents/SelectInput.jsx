import React from 'react';
import { useField } from 'formik';

import styled from 'styled-components';
import { FormError } from './FormError';
import Label from './Label';

const StyledSelect = styled.select`
  width: 100%;
  height: 47px;
  max-width: 600px;
  padding: 8px 13px;

  font-family: 'Courier';
  font-size: ${props => props.theme.fontSizes.medium}px;
  border: 1px solid lightgrey;
  background-color: white;

  color: ${props => (props.value === '' ? 'grey' : 'black')};

  & > option {
    color: black;
    font-size: ${props => props.theme.fontSizes.medium}px;
  }

  & > option:first-child {
    color: grey;
  }
`;

const SelectInput = ({ label, options, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <Label
        isRequired={props.isRequired}
        label={label}
        htmlFor={props.id || props.name}
      />
      <StyledSelect {...field} {...props}>
        {options.map(option => (
          <option value={option.value}>{option.text}</option>
        ))}
      </StyledSelect>
      {meta.touched && meta.error ? <FormError>{meta.error}</FormError> : null}
    </>
  );
};

export default SelectInput;
