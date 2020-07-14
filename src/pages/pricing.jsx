import React from 'react';
import Seo from '../components/fragments/SEO';
import { MainHeader } from '../components/blocks/Header';
import ContainerContent from '../components/fragments/ContainerContent';
import Flex from '../components/fragments/Flex';
import Footer from '../components/blocks/Footer';
import PropTypes from 'prop-types';
import BlogIndex from './index';


const PricingPage = ({ data, location }) => {
  const title = 'Kekker Pricing';
  const description = 'Choose the right plan for your application';

  return (
    <div>
      <Seo title={title} description={description} />

      <MainHeader location={location.pathname} />

      <main style={{ marginTop: 0 }}>

        <ContainerContent>
          <Flex
            flexDirection={{ _: 'column', sm: 'row' }}
            flexWrap="wrap"
            justifyContent="space-between"
            mb={{ _: 0, sm: 6 }}
          >
            Content
          </Flex>

          <hr />
        </ContainerContent>

      </main>

      <Footer />

    </div>
  );
};

PricingPage.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
};

export default PricingPage;
