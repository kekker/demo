import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Theme from '../Theme';
import ContainerContent from '../ContainerContent';
import Footer from '../Footer';
import { ShortHeader } from '../Header';
import Seo from '../SEO';
import SideMenu from '../Menu/SideMenu';

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 5em;
  
  min-height: calc(90vh - ${props => props.theme.space[6]}px);

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
  
   @media (max-width: ${props => props.theme.breakpoints.sm}) {
      min-height: calc(90vh - ${props => props.theme.space[4]}px);
  }
`;

const GridMenu = styled.div`
  margin-bottom: ${props => props.theme.space[6]}px;
  margin-top: ${props => props.theme.space[3]}px;
  white-space: nowrap;

  @media (min-height: 300px) {
    position: sticky;
    top: calc(10vh + ${props => props.theme.space[7]}px);
  }
`;

const ResponsiveAside = styled.aside`
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: none;
  }
`;

const Layout = ({
  children, location, title, description, sideMenu, pb
}) => (
  <Theme>
    <Seo title={title} description={description} />

    <div style={{minHeight: '90vh'}}>
        <ShortHeader location={location} />

        <main>
            <ContainerContent mt='10vh' mb={0} pb={pb ? pb : 0}>
                <GridLayout>
                    {children}
                    <ResponsiveAside>
                        <GridMenu>
                            <SideMenu
                                location={location}
                                section={sideMenu}
                            />
                        </GridMenu>
                    </ResponsiveAside>
                </GridLayout>
            </ContainerContent>
        </main>
    </div>

    <Footer />
  </Theme>
);

Layout.propTypes = {
  location: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
  sideMenu: PropTypes.string
};

Layout.defaultProps = {
  description: '',
};

export default Layout;
