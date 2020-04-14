import React from 'react';
import PropTypes from 'prop-types';
import SwaggerUI from 'swagger-ui-react';

import '../../../styles/swagger-ui-new.css';

// Components
import ApiLayout from '../../../templates/api';

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
    return (
      <ApiLayout
        location={location.pathname}
        title="API Event - Kekker"
        description="Event request for Kekker API"
      >
        {swaggerComponent}
      </ApiLayout>
    );
  }
}

EventPage.propTypes = {
  location: PropTypes.object,
};

export default EventPage;
