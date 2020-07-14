import React from 'react';
import PropTypes from 'prop-types';
import SwaggerUI from 'swagger-ui-react';

import '../../../styles/swagger-ui-new.css';

// Components
import Layout from '../../../components/fragments/Layout';
import MarkdownFooter from '../../../components/blocks/MarkdownFooter';
import SandboxPromoSection from '../../../components/blocks/SandboxPromoSection';

const swaggerContent = require('../../../../static/kekkerdemo-deal');

class DealPage extends React.Component {
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
      to: '/docs/api/dealtemplate',
      title: 'API: DealTemplate'
    };

    const prev = {
      to: '/docs/api/client',
      title: 'API: Client'
    };

    return (
      <Layout
        location={location.pathname}
        title="API Deal - Kekker"
        description="Deal request for Kekker API"
      >
        {swaggerComponent}
        <MarkdownFooter next={next} prev={prev} />
      </Layout>
    );
  }
}

DealPage.propTypes = {
  location: PropTypes.object,
};

export default DealPage;
