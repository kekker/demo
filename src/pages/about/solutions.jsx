import React from 'react';
import PropTypes from 'prop-types';

// Components
import Layout from '../../components/Layout';
import MarkdownFooter from "../../components/MarkdownFooter";
import SandboxPromoSection from "../../components/SandboxPromoSection";
import Heading from "../../components/TextStyles/Heading";
import Text from "../../components/TextStyles/Text";
import SolutionsList from "../../components/SolutionsList/SolutionsList";

const SolutionsPage = ({location}) => {
    const prev = {
        to: '/about/platform.html',
        title: 'Platform'
    };

    const next = {
        to: '/about/benefits.html',
        title: 'Benefits'
    };

    return (
        <Layout
            location={location.pathname}
            title="Solutions"
            description="Decentralized solutions"
        >
            <Heading>Decentralized solutions</Heading>
            <Text tag='p'>
                Explore the list of the DAPP projects:
            </Text>
            <SolutionsList/>
            <SandboxPromoSection/>
            <MarkdownFooter next={next} prev={prev}/>
        </Layout>
    )
};

SolutionsPage.propTypes = {
    location: PropTypes.object,
};

export default SolutionsPage;
