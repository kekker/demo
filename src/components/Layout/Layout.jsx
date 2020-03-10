import React from 'react';
import PropTypes from 'prop-types';

import Theme from '../Theme';
import MainHeader from '../Header';
import ContainerContent from '../ContainerContent';

const Layout = ({
  children, location
}) => (
  <Theme>
    <div>
      <MainHeader location={location} />

      <main>
        <ContainerContent>{children}</ContainerContent>
      </main>
      <footer>
        ©
        {new Date().getFullYear()}
        {' '}
        Kekker
        {' '}
      </footer>
    </div>
  </Theme>
);

Layout.propTypes = {
  location: PropTypes.string,
  children: PropTypes.node,
};

export default Layout;
