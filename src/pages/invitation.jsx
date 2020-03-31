import React from 'react';
import PropTypes from 'prop-types';

// Components
import Layout from '../components/Layout';
import InvitationForm from '../components/Forms/InvitationForm';
import Heading from '../components/TextStyles/Heading';
import Text from '../components/TextStyles/Text';

const InvitationPage = ({ location }) => (
  <Layout
    location={location.pathname}
    title="Sandbox - Kekker"
    description="Kekker Invitation"
    sideMenu={'docs'}
  >
    <Heading fontSize={'h1.lg'} level={1}>Get access to Sandbox</Heading>
    <div style={{ maxWidth: '600px' }}>
      <Text mb={2} tag="p">
        We've prepared the Sandbox so that you can try out powerful features
        of Kekker Platform by yourself.
        {' '}
        <br />
      </Text>
      <Text tag="p">
        Please fill out the form so that we can give you full access.
        {' '}
        <br />
        Sandbox is absolutely free to use. Start experimenting!
      </Text>
    </div>
    <InvitationForm />
  </Layout>
);

InvitationPage.propTypes = {
  location: PropTypes.string,
};

export default InvitationPage;
