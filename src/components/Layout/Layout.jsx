import React from 'react';
import PropTypes from 'prop-types';

import Theme from '../Theme';
import ContainerContent from '../ContainerContent';
import Footer from '../Footer';
import { ShortHeader } from '../Header';
import Seo from '../SEO';

const Layout = ({
  children, location, title, description
}) => (
  <Theme>
    <Seo title={title} description={description} />
    <div>
      <ShortHeader location={location} />

      <main>
        <ContainerContent>{children}</ContainerContent>
      </main>

      <Footer />
    </div>
  </Theme>
);

Layout.propTypes = {
  location: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Layout;
