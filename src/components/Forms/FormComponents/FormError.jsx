import React from "react";
import styled from "styled-components";

export const FormError = styled.div`
    margin-top: ${ props => props.theme.space[2]}px;
    
    color: red;
    font-size:  ${ props => 
        props.theme.fontSizes.extrasmall}px;
`;


