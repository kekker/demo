import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Theme from '../Theme';
import ContainerContent from '../ContainerContent';
import Footer from '../Footer';
import { ShortHeader } from '../Header';
import Seo from '../SEO';
import SideMenu from '../Menu/SideMenu';
import { PageStateProvider } from '../../state/pageState';

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 5em;

  min-height: calc(100vh - ${({ theme }) => theme.layout.menuHeight} 
                         - ${({ theme }) => theme.space[6]}px);

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-height: unset;
  }
`;

const GridMenu = styled.div`
  margin-bottom: ${({ theme }) => theme.space[6]}px;
  margin-top: ${({ theme }) => theme.space[3]}px;
  white-space: nowrap;

  @media (min-height: 300px) {
    position: sticky;
    top: calc(${({ theme }) => theme.layout.menuHeight} 
              + ${({ theme }) => theme.space[7]}px);
  }
`;

const ResponsiveAside = styled.aside`
  @media (max-width: 700px) {
    display: none;
  }
`;

const Layout = ({
  children, location, title, description, sideMenu, pb
}) => (
  <Theme>
    <Seo title={title} description={description} />

    <div>
      <ShortHeader location={location} />

      <main>
        <PageStateProvider>
          <ContainerContent mb={0} pb={pb || 0} mt="10vh">
            <GridLayout>
              <div>
                {children}
              </div>
              <ResponsiveAside>
                <GridMenu>
                  <SideMenu location={location} section={sideMenu} />
                </GridMenu>
              </ResponsiveAside>
            </GridLayout>
          </ContainerContent>
        </PageStateProvider>
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
  sideMenu: PropTypes.string,
};

Layout.defaultProps = {
  description: '',
};

export default Layout;


