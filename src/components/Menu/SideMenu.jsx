import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Heading from '../TextStyles/Heading';
import MenuLinks from './MenuLinks';

import HeaderBullet from '../../../static/assets/kekker_menu_bullet.svg';

import { listDocsLinks, listAboutLinks} from "../../utils/getLinkLists";

const MenuHeader = styled(Heading)`
  position: relative;

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: -8px;
    left: -34px;
    width: 40px;
    background-size: 40px 40px;
    height: 40px;
    background-image: url(${HeaderBullet});
  }
`;

const SideMenu = ({ location, section }) => {
  let linkSections;
  if (section) {
    linkSections = section.includes('docs')
        ? listDocsLinks
        : listAboutLinks;
  } else {
    linkSections = location.includes('docs/')
        ? listDocsLinks
        : listAboutLinks;
  }

  return (
    <>
      {linkSections.map(section => (
        <React.Fragment key={section.header}>
          <MenuHeader
            mb={2}
            textTransform="uppercase"
            textAlign="left"
            level={4}
            fontSize='22px'
          >
            {section.header}
          </MenuHeader>
          <MenuLinks location={location} links={section.items} />
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
