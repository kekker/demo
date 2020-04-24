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
            <Text tag='p'>
                Companies from different industries seek operational efficiency in platform solutions.
                Distributed (blockchain-based) platforms are expected to deliver the greatest
                benefits with their ability to create more transparency and fairness
                while also saving businesses time and money.
            </Text>
            <Text tag='p'>
                Below you can find practical examples of blockchain technology,
                already changing traditional ways of doing business.
                Major sectors are introducing distributed solutions to address
                recurrent industry problems.
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
