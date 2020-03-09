import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/Layout/Layout';

const NotFoundPage = ({ location }) => (
  <Layout location={location} title="Sorry, ain't no page here">
    <h1>Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

NotFoundPage.propTypes = {
  location: PropTypes.string.isRequired,
};

export default NotFoundPage;
