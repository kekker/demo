import { Link } from 'gatsby';
import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

import {
  Facebook,
  GooglePlus,
  Linkedin,
  Skype,
  Twitter,
  Instagram,
} from './Icons';

const StyledIconLink = styled(Link)`
  font-size: 0.8em;
  width: 2.2em;
  height: 2.2em;
  margin-right: 0.4em;
  line-height: 2.2em;
  text-align: center;
  background: ${props => props.theme.colors.secondaryDark};
  border-radius: 50%;

  color: ${props => props.theme.colors.invertedText};
  &:last-child {
    margin-right: 0;
  }
`;

const InlineIcon = ({ type }) => {
  switch (type) {
    case 'Facebook':
      return <Facebook />;
    case 'GooglePlus':
      return <GooglePlus />;
    case 'Linkedin':
      return <Linkedin />;
    case 'Skype':
      return <Skype />;
    case 'Twitter':
      return <Twitter />;
    case 'Instagram':
      return <Instagram />;
    default:
      return null;
  }
};

const IconLink = ({ type, linkTo }) => (
  <StyledIconLink to={linkTo}>
    <InlineIcon type={type} />
  </StyledIconLink>
);

IconLink.propTypes = {
  type: PropTypes.string.isRequired,
  linkTo: PropTypes.string
};

InlineIcon.propTypes = {
  type: PropTypes.string.isRequired,
};

export default IconLink;
