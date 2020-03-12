import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon as Base } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faGooglePlus,
  faLinkedin,
  faSkype,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
// import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
// import {
//   faHeart, faLink, faBars, faTimes,
// } from '@fortawesome/free-solid-svg-icons';

const FontAwesomeIcon = styled(Base)`
  ${props => (props.color ? `color: ${props.color}` : '')};
`;

const Facebook = () => <FontAwesomeIcon icon={faFacebookF} />;
const GooglePlus = () => <FontAwesomeIcon icon={faGooglePlus} />;
const Linkedin = () => <FontAwesomeIcon icon={faLinkedin} />;
const Skype = () => <FontAwesomeIcon icon={faSkype} />;
const Twitter = () => <FontAwesomeIcon icon={faTwitter} />;
const Instagram = () => <FontAwesomeIcon icon={faInstagram} />;
// const Envelope = props => <FontAwesomeIcon {...props} icon={faEnvelope} />;
// const Heart = props => <FontAwesomeIcon {...props} icon={faHeart} />;
// const FaLink = props => <FontAwesomeIcon {...props} icon={faLink} />;
// const FaBars = props => <FontAwesomeIcon {...props} icon={faBars} />;
// const FaTimes = props => <FontAwesomeIcon {...props} icon={faTimes} />;

export {
  Facebook,
  GooglePlus,
  Linkedin,
  Skype,
  Twitter,
  Instagram,
  // Envelope,
  // Heart,
  // FaLink,
  // FaBars,
  // FaTimes,
};
