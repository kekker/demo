import React from 'react';
import PropTypes from 'prop-types';
import SwaggerUI from 'swagger-ui-react';
import '../../../styles/swagger-ui.css';

// Components
import ApiLayout from '../../../templates/api';

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

    return (
      <ApiLayout
        location={location.pathname}
        title="API Client - Kekker"
        description="Client request for Kekker API"
      >
        {swaggerComponent}
      </ApiLayout>
    );
  }
}

ClientPage.propTypes = {
  location: PropTypes.object,
};

export default ClientPage;
