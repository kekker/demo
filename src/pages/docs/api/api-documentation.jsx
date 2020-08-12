import React from 'react';
import PropTypes from 'prop-types';
import SwaggerUI from 'swagger-ui-react';

import '../../../styles/swagger-ui-new.css';

// Components
import Layout from '../../../components/fragments/Layout';
import MarkdownFooter from '../../../components/blocks/MarkdownFooter';
import GridMenu from '../../../components/fragments/GridItem/GridMenu';
import SideMenu from '../../../components/blocks/Menu/SideMenu';
import { listDocsLinks } from '../../../utils/getLinkLists';
import ResponsiveAside from '../../../components/fragments/ResponsiveAside';

const swaggerContent = require('../../../../static/kekkerdemo');


class ApiPage extends React.Component {
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

    const prev = {
      to: '/docs/api/handling-errors.html',
      title: 'Handling Errors'
    };

    return (
      <Layout
        location={location.pathname}
        title="API Documentation - Kekker"
        description="Kekker API Documentation"
      >
        <div>
          {swaggerComponent}
          <MarkdownFooter prev={prev} />
        </div>

        <ResponsiveAside>
          <GridMenu>
            <SideMenu location={location.pathname} links={listDocsLinks} />
          </GridMenu>
        </ResponsiveAside>
      </Layout>
    );
  }
}

ApiPage.propTypes = {
  location: PropTypes.object,
};

export default ApiPage;
