import React from 'react';
import PropTypes from 'prop-types';
import SwaggerUI from 'swagger-ui-react';

import '../../../styles/swagger-ui-new.css';

// Components
import Layout from '../../../components/Layout';
import MarkdownFooter from "../../../components/MarkdownFooter";
import SandboxPromoSection from "../../../components/SandboxPromoSection";

const swaggerContent = require('../../../../static/kekkerdemo-client');

class ClientPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      swaggerComponent: '',
    };
  }

  componentDidMount() {
    if (window) {
      this.setState({
        swaggerComponent: (
          <SwaggerUI docExpansion="list" spec={swaggerContent} />
        ),
      });
    }
  }

  render() {
    const { location } = this.props;
    const { swaggerComponent } = this.state;

    const next = {
      to: '/docs/api/deal',
      title: 'Deal Request'
    };

    return (
      <Layout
        location={location.pathname}
        title="API Client - Kekker"
        description="Client request for Kekker API"
      >
        {swaggerComponent}
        <SandboxPromoSection/>
        <MarkdownFooter next={next} />
      </Layout>
    );
  }
}

ClientPage.propTypes = {
  location: PropTypes.object,
};

export default ClientPage;
