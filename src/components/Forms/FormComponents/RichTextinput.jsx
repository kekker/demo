import React from 'react';
import { useField } from 'formik';
import styled from 'styled-components';

import { FormError } from './FormError';
import Label from './Label';

const StyledRichInput = styled.textarea`
  width: 100%;
  max-width: 600px;
  height: 150px;
  padding: 8px 13px;

  border: 1px solid lightgrey;
  font-family: 'Courier';
  font-size: ${props => props.theme.fontSizes.medium}px;
`;

const RichTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <Label
        isRequired={props.isRequired}
        label={label}
        htmlFor={props.name || props.id}
      />
      <StyledRichInput {...field} {...props} />
      {meta.touched && meta.error ? <FormError>{meta.error}</FormError> : null}
    </>
  );
};

export default RichTextInput;
