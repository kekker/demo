import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ContainerContent from '../ContainerContent';
import Footer from '../Footer';
import { ShortHeader } from '../Header';
import Seo from '../SEO';
import { PageStateProvider } from '../../state/pageState';
import SandboxPromoSection from '../SandboxPromoSection';

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 5em;

  min-height: calc(100vh - ${({ theme }) => theme.layout.menuHeight} 
                         - ${({ theme }) => theme.space[6]}px);

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-gap: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-height: unset;
  }
`;


const Layout = ({
  children, location, title, description, pb
}) => (
  <>
    <Seo title={title} description={description} />

    <div>
      <ShortHeader location={location} />

      <PageStateProvider>
        <main>
          <ContainerContent mb={0} pb={pb || 0} mt="10vh">
            <GridLayout>
              {children}
            </GridLayout>
          </ContainerContent>
        </main>
      </PageStateProvider>
    </div>

    <SandboxPromoSection />
    <Footer />
  </>
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
