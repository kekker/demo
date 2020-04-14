import React from 'react';
import PropTypes from 'prop-types';
import SwaggerUI from 'swagger-ui-react';

import '../../../styles/swagger-ui-new.css';

// Components
import ApiLayout from '../../../templates/api';

const swaggerContent = require('../../../../static/kekkerdemo-service');

class ServicePage extends React.Component {
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
        title="API Service - Kekker"
        description="Service request for Kekker API"
      >
        {swaggerComponent}
      </ApiLayout>
    );
  }
}

ServicePage.propTypes = {
  location: PropTypes.object,
};

export default ServicePage;
