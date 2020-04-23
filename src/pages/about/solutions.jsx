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
            title="Decentralized solutions worldwide"
            description="Decentralized solutions"
        >
            <Heading>Solutions</Heading>
            <Text tag='p' fontSize='large'>
                Decentralized solutions worldwide
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
