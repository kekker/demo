import React from 'react';
import PropTypes from 'prop-types';
import SwaggerUI from 'swagger-ui-react';

import '../../../styles/swagger-ui-new.css';

// Components
import ApiLayout from '../../../templates/api';
import MarkdownFooter from "../../../components/MarkdownFooter";
import SandboxPromoSection from "../../../components/SandboxPromoSection";

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
      title: 'Event Request'
    };

    const prev = {
      to: '/docs/api/deal',
      title: 'Deal Request'
    };

    return (
      <ApiLayout
        location={location.pathname}
        title="API DealTemplate - Kekker"
        description="DealTemplate request for Kekker API"
      >
        {swaggerComponent}
        <SandboxPromoSection/>
        <MarkdownFooter next={next} prev={prev} />
      </ApiLayout>
    );
  }
}

DealTemplatePage.propTypes = {
  location: PropTypes.object,
};

export default DealTemplatePage;
