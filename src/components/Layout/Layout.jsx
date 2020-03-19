import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Theme from '../Theme';
import ContainerContent from '../ContainerContent';
import Footer from '../Footer';
import { ShortHeader } from '../Header';
import Seo from '../SEO';
import SideMenu from "../Menu/SideMenu";

const GridLayout = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
    
     @media (max-width: ${props => props.theme.breakpoints.sm}) {
        display: block;
    }
`;

const GridAll = styled.div`
    grid-column: 1 / 3;
`;

const GridMenu = styled.div`
    margin-bottom: ${props => props.theme.space[6]}px;
    margin-top: ${props => props.theme.space[5]}px;
    white-space: nowrap;
    
    @media (min-height: 300px) {
        position: sticky;
        top: ${props => props.theme.space[6]}px;;
    }
    
     @media (max-width: ${props => props.theme.breakpoints.sm}) {
        display: none;
    }
`;

const Layout = ({
  children, location, title, description
}) => (
  <Theme>
    <Seo title={title} description={description} />
    <ShortHeader location={location} />


      <main>
        <ContainerContent>
            <GridLayout>
            {children}
            <aside>
                <GridMenu>
                    <SideMenu location={location} />
                </GridMenu>
            </aside>
            </GridLayout>
        </ContainerContent>
      </main>


      <Footer />
  </Theme>
);

Layout.propTypes = {
  location: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
};

Layout.defaultProps = {
  description: '',
};

export default Layout;
