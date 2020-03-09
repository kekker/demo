import React from 'react';
import PropTypes from 'prop-types';
import Theme from '../Theme';

const Layout = ({ title, subtitle, children }) => (
  <Theme>
    <div className="app-container">
      <header>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </header>
      <main>{children}</main>
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
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
};

export default Layout;
