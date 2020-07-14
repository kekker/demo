import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Heading from '../../fragments/TextStyles/Heading';
import MenuLinks from './MenuLinks';

import HeaderBullet from '../../../../static/assets/kekker_menu_bullet.svg';


const MenuHeader = styled(Heading)`
  position: relative;

  &:before {
    content: '';
    display: block;
    position: absolute;
    bottom: 3px;
    left: -25px;
    width: 20px;
    background-size: 20px 20px;
    height: 20px;
    background-image: url(${HeaderBullet});
  }
`;

const SideMenu = ({ location, links }) => (
  <>
    {links.map(section => (
      <React.Fragment key={section.header}>
        <MenuHeader
          mb={2}
          textTransform="uppercase"
          textAlign="left"
          level={4}
          fontSize="22px"
        >
          {section.header}
        </MenuHeader>
        <MenuLinks location={location} links={section.items} />
      </React.Fragment>
    ))}
  </>
);


SideMenu.propTypes = {
  location: PropTypes.string.isRequired,
  links: PropTypes.array
};

export default SideMenu;
