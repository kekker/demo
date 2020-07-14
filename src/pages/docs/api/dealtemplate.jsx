import React from 'react';
import PropTypes from 'prop-types';
import SwaggerUI from 'swagger-ui-react';

import '../../../styles/swagger-ui-new.css';

// Components
import Layout from '../../../components/fragments/Layout';
import MarkdownFooter from '../../../components/blocks/MarkdownFooter';
import SandboxPromoSection from '../../../components/blocks/SandboxPromoSection';

const swaggerContent = require('../../../../static/kekkerdemo-dealtemplate');

class DealTemplatePage extends React.Component {
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
      to: '/docs/api/event',
      title: 'API: Event'
    };

    const prev = {
      to: '/docs/api/deal',
      title: 'API: Deal'
    };

    return (
      <Layout
        location={location.pathname}
        title="API DealTemplate - Kekker"
        description="DealTemplate request for Kekker API"
      >
        {swaggerComponent}
        <MarkdownFooter next={next} prev={prev} />
      </Layout>
    );
  }
}

DealTemplatePage.propTypes = {
  location: PropTypes.object,
};

export default DealTemplatePage;
