import React from 'react';
import {
  faGithub
} from '@fortawesome/free-brands-svg-icons';

import Flex from '../../fragments/Flex';
import ButtonLink from '../../fragments/Button';


const SamplesButtons = () => (
  <Flex mt={{ _: '20px', sm: '30px' }} mb={{ _: '50px', sm: '150px' }} flexDirection='row'>
    <ButtonLink
      wrapperStyles={{ marginRight: '10px' }}
      icon={faGithub}
      iconSize="extralarge"
      size="extralarge"
      fontSize="20px"
      isBlack
      isUppercase={false}
      to="#"
      disabled={false}
      title="Get Source Code"
    />
    <ButtonLink
      size="extralarge"
      fontSize="20px"
      isPrimary
      isUppercase={false}
      to="/sample-app"
      disabled={false}
      title="Get Started"
    />
  </Flex>
);

export default SamplesButtons;
