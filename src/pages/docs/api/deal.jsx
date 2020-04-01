import React from 'react';
import PropTypes from 'prop-types';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

// Components

import ApiLayout from '../../../templates/api';

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

    return (
      <ApiLayout
        location={location.pathname}
        title="API Deal - Kekker"
        description="Deal request for Kekker API"
      >
        {swaggerComponent}
      </ApiLayout>
    );
  }
}

DealPage.propTypes = {
  location: PropTypes.object,
};

export default DealPage;
