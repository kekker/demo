import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Heading from '../TextStyles/Heading';
import MenuLink from './MenuLink';

import HeaderBullet from '../../../static/assets/kekker_menu_bullet.svg';

const menuObject = require('../../../content/asideNav.yml');

const MenuHeader = styled(Heading)`
  position: relative;

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: -12px;
    left: -34px;
    width: 40px;
    background-size: 40px 40px;
    height: 40px;
    background-image: url(${HeaderBullet});
  }
`;

const SideMenu = ({ location, section }) => {
  const docsSections = menuObject.docs;
  const aboutSections = menuObject.about;
  let linkSections;
  if (section) {
    linkSections = section.includes('docs')
        ? docsSections
        : aboutSections;
  } else {
    linkSections = location.includes('docs/')
        ? docsSections
        : aboutSections;
  }

  return (
    <>
      {linkSections.map(section => (
        <React.Fragment key={section.header}>
          <MenuHeader
            mb={3}
            textTransform="uppercase"
            textAlign="left"
            level={4}
          >
            {section.header}
          </MenuHeader>
          <MenuLink links={section.items} />
        </React.Fragment>
      ))}
    </>
  );
};

SideMenu.propTypes = {
  location: PropTypes.string.isRequired,
  section: PropTypes.oneOf([
      'docs',
      'about'
  ])
};

export default SideMenu;
