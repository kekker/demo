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
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
// import {
//   faHeart, faLink, faBars, faTimes,
// } from '@fortawesome/free-solid-svg-icons';

import {
  faAngleDown,
  faAngleUp,
  faBars,
  faTimes,
  faCopy
} from '@fortawesome/free-solid-svg-icons';

const FontAwesomeIcon = styled(Base)`
  ${props => (props.color ? `color: ${props.color}` : '')};
`;

const Facebook = props => <FontAwesomeIcon {...props} icon={faFacebookF} />;
const GooglePlus = props => <FontAwesomeIcon {...props} icon={faGooglePlus} />;
const Linkedin = props => <FontAwesomeIcon {...props} icon={faLinkedin} />;
const Skype = props => <FontAwesomeIcon {...props} icon={faSkype} />;
const Twitter = props => <FontAwesomeIcon {...props} icon={faTwitter} />;
const Instagram = props => <FontAwesomeIcon {...props} icon={faInstagram} />;
const AngleDown = props => <FontAwesomeIcon {...props} icon={faAngleDown} />;
const AngleUp = props => <FontAwesomeIcon {...props} icon={faAngleUp} />;
const Bars = props => <FontAwesomeIcon {...props} icon={faBars} />;
const Close = props => <FontAwesomeIcon {...props} icon={faTimes} />;
const Copy = props => <FontAwesomeIcon {...props} icon={faCopy} />;

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
  AngleDown,
  AngleUp,
  Bars,
  Close,
  Copy
  // Envelope,
  // Heart,
  // FaLink,
  // FaBars,
  // FaTimes,
};
