import React from 'react';
import PropTypes from 'prop-types';

// Components
import Layout from '../components/Layout';
import InvitationForm from "../components/Forms/InvitationForm";
import Heading from "../components/TextStyles/Heading";
import Text from "../components/TextStyles/Text";


const InvitationPage = ({ location }) => {

    return (
        <Layout location={location.pathname} title="Kekker Invitation" description="Kekker Invitation">
            <Heading level={1}>Get access to Sandbox</Heading>
            <Text mb={2} fontSize={'large'} tag={'p'} >
                We've prepared the Sandbox so that you can try out powerful features of Kekker Platform by yourself. <br />
            </Text>
            <Text fontSize={'large'} tag={'p'}>
                Please fill out the form so that we can give you full access. <br/>
                Sandbox is absolutely free to use. Start experimenting!
            </Text>
                <InvitationForm />
        </Layout>
    );
};

InvitationPage.propTypes = {
    data: PropTypes.node,
    location: PropTypes.string,
};

export default InvitationPage;
