import React from "react";
import {useField} from "formik";

import { FormError } from "./FormError";
import Label from "./Label";
import styled from "styled-components";

const StyledSelect = styled.select`
    width: 100%;
    height: 47px;
    max-width: 600px;
    padding: 8px 13px;
    
    font-family: 'Courier';
    border: 1px solid lightgrey;
    text-transform: uppercase;
    
    color: ${props => props.value === '' ?
    'grey' : 'black'
};
    
    & > option {
        color: black;
    }
    
    & > option:first-child {
        color: grey;
    }
`;


const SelectInput = ({ label, options, ...props }) => {
    const [field, meta] = useField(props);
    console.log(field.value);
    return (
        <>
            <Label isRequired={props.isRequired} label={label} htmlFor={props.id || props.name} />
            <StyledSelect {...field} {...props}>
                {options.map( option => (
                    <option value={option.value}>{option.text}</option>
                ))}
            </StyledSelect>
            {meta.touched && meta.error ? (
                <FormError>{meta.error}</FormError>
            ) : null}
        </>
    );
};

export default SelectInput;

