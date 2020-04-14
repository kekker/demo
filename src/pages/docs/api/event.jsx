import React from 'react';
import PropTypes from 'prop-types';
import SwaggerUI from 'swagger-ui-react';

import '../../../styles/swagger-ui-new.css';

// Components
import ApiLayout from '../../../templates/api';
import MarkdownFooter from "../../../components/MarkdownFooter";

const swaggerContent = require('../../../../static/kekkerdemo-event');

class EventPage extends React.Component {
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
      to: '/docs/api/service',
      title: 'Service Request'
    };

    const prev = {
      to: '/docs/api/dealtemplate',
      title: 'DealTemplate Request'
    };

    return (
      <ApiLayout
        location={location.pathname}
        title="API Event - Kekker"
        description="Event request for Kekker API"
      >
        {swaggerComponent}
        <MarkdownFooter next={next} prev={prev} />
      </ApiLayout>
    );
  }
}

EventPage.propTypes = {
  location: PropTypes.object,
};

export default EventPage;
