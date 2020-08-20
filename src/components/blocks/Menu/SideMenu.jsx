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

const StickyMenu = styled.nav`
  max-width: 250px;
  
  @media (min-height: 300px) {
    position: sticky;
    top: ${({ theme }) => theme.layout.menuHeight};
  }
`;

const ScrollContainer = styled.div`
  height: calc(100vh - 10vh - 75px);
  overflow-y: scroll;
  
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

const SideMenu = ({ location, links }) => (
  <StickyMenu>
    <ScrollContainer>
      <div style={{ marginLeft: '30px', marginTop: '1em' }}>
        {links.map(section => (
          <div style={{ marginBottom: '20px' }} key={section.header}>
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
          </div>
        ))}
      </div>
    </ScrollContainer>
  </StickyMenu>
);


SideMenu.propTypes = {
  location: PropTypes.string.isRequired,
  links: PropTypes.array
};

export default SideMenu;
