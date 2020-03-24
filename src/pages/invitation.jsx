import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';

// Components
import ContainerContent from '../components/ContainerContent';
import ButtonLink from '../components/Button';
import Layout from '../components/Layout';
import SideMenu from "../components/Menu/SideMenu";
import InvintationForm from "../components/Forms/InvintationForm";
import Heading from "../components/TextStyles/Heading";
import Text from "../components/TextStyles/Text";


const DocsList = ({ data, location }) => {

    return (
        <Layout location={location.pathname} title="Kekker Invitation" description="Kekker Invitation">
                <Heading level={1}>Get an invitation</Heading>
                <Text tag={'div'} fontSize={'large'}>
                    Feel free to contact us
                </Text>
                <InvintationForm />
        </Layout>
    );
};

DocsList.propTypes = {
    data: PropTypes.node,
    location: PropTypes.string,
};

export default DocsList;
