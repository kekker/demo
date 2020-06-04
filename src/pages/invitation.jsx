import React from 'react';
import PropTypes from 'prop-types';

// Components
import Layout from '../components/Layout';
import InvitationForm from '../components/Forms/InvitationForm';
import Heading from '../components/TextStyles/Heading';
import Text from '../components/TextStyles/Text';

class InvitationPage extends React.Component {
  constructor(props) {
    super(props);

    this.ref = React.createRef();

    this.state = {
      isExpanded: true
    };

    this.handleExpansion = this.handleExpansion.bind(this);
  }

  handleExpansion = () => {
    this.setState({ isExpanded: false });
  };

  render() {
    const { isExpanded } = this.state;
    return (
      <Layout
        location={this.props.location.pathname}
        title="Sandbox Access - Kekker"
        description="Fill in this form to get access to Kekker Sandbox"
        sideMenu="docs"
        pb={{ _: 4, sm: 6 }}
      >
        <div ref={this.ref}>
          <Heading
            fontSize={{ _: 'h1.sm', sm: 'h1.md', md: 'h1.lg' }}
            level={1}
          >
            Sandbox Access
          </Heading>

          { isExpanded && (
          <div style={{ maxWidth: '600px' }}>
            <Heading level={3} mb="0.3em">
              Sandbox environment
            </Heading>
            <Text mb={2} tag="p">
              Kekker Sandbox is a copy of the production environment and supports all API endpoints.
              It is intended for engineers, developers, architects,
              product owners and anyone else who desires to develop/test decentralized apps.
            </Text>
            <Heading level={3} mb="0.3em">
              Sandbox setup
            </Heading>
            <Text tag="p">
              To set up your Sandbox account, all we ask is for you to fill out the form below.
            </Text>
            <Text tag="p">
              Dig into Kekker Sandbox right now!
            </Text>
          </div>
          )}

          <InvitationForm parentCallback={this.handleExpansion} parentRef={this.ref} />
        </div>

      </Layout>
    );
  }
}

InvitationPage.propTypes = {
  location: PropTypes.string,
};

export default InvitationPage;
