import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { convertThemeFontsToString } from '../../../utils/convertThemeFontsToString';

const StyledLabel = styled.label`
  display: block;
  margin-top: ${props => props.theme.space[4]}px;
  margin-bottom: ${props => props.theme.space[2]}px;

  font-size: ${props => props.theme.fontSizes['medium']}px;
  font-weight: 800;
  text-transform: uppercase;
  font-family: ${props => convertThemeFontsToString(props.theme.headerFontFamily)};
`;

const Label = ({ label, isRequired, htmlFor }) => (
  <StyledLabel htmlFor={htmlFor}>
    {label}
    :
    {isRequired && <span style={{ color: 'red' }}> * </span>}
  </StyledLabel>
);

Label.propTypes = {
  label: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  htmlFor: PropTypes.string.isRequired,
};

Label.defaultProps = {
  isRequired: false,
};

export default Label;
