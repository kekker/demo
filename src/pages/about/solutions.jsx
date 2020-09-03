import React from 'react';
import PropTypes from 'prop-types';

// Components
import Layout from '../../components/fragments/Layout';
import MarkdownFooter from '../../components/blocks/MarkdownFooter';
import Heading from '../../components/fragments/TextStyles/Heading';
import Text from '../../components/fragments/TextStyles/Text';
import SolutionsList from '../../components/blocks/SolutionsList/SolutionsList';
import SideMenu from '../../components/blocks/Menu/SideMenu';
import ResponsiveAside from '../../components/fragments/ResponsiveAside';

import { listAboutLinks } from '../../utils/getLinkLists';


const SolutionsPage = ({ location }) => {
  const prev = {
    to: '/about/benefits.html',
    title: 'Benefits'
  };

  return (
    <Layout
      location={location.pathname}
      title="Decentralized solutions worldwide"
      description="Decentralized solutions"
    >
      <div>
        <Heading>Decentralized projects worldwide</Heading>
        <Text tag="p">
          Companies from different industries seek operational efficiency in platform solutions.
          Distributed (blockchain-based) platforms are expected to deliver the greatest
          benefits with their ability to create more transparency and fairness
          while also saving businesses time and money.
        </Text>
        <Text tag="p">
          Below you can find practical examples of blockchain technology,
          already changing traditional ways of doing business.
          Major sectors are introducing distributed solutions to address
          recurrent industry problems.
        </Text>
        <SolutionsList />
        <MarkdownFooter prev={prev} />
      </div>

      <ResponsiveAside>
        <SideMenu location={location.pathname} links={listAboutLinks} />
      </ResponsiveAside>

    </Layout>
  );
};

SolutionsPage.propTypes = {
  location: PropTypes.object,
};

export default SolutionsPage;
