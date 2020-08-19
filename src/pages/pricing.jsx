import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import Seo from '../components/fragments/SEO';
import Flex from '../components/fragments/Flex';
import Footer from '../components/blocks/Footer';
import PricingHeader from '../components/blocks/Header/PricingHeader';
import GridItem from '../components/fragments/GridItem';
import Heading from '../components/fragments/TextStyles/Heading';
import Text from '../components/fragments/TextStyles/Text';
import ContainerContent from '../components/fragments/ContainerContent';
import Button from '../components/fragments/Button/Button';

import pricingContent from '../../content/pricingContent.json';
import SandboxPromoSection from '../components/blocks/SandboxPromoSection';
import AnimatedDialog from '../components/fragments/AnimatedDialog';
import QuestionForm from '../components/blocks/Forms/QuestionForm';


const PricingPage = ({ data, theme: { colors }, location }) => {
  const title = 'Kekker Pricing';
  const description = 'Choose the right plan for your application';

  const [showDialog, setShowDialog] = React.useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  return (
    <div>
      <Seo title={title} description={description} />

      <PricingHeader location={location.pathname} />

      <main style={{ marginTop: 0 }}>

        <ContainerContent pt={0} pb={0} mt={{ _: 5, xs: '-75px' }}>

          <Flex
            flexDirection={{ _: 'column', sm: 'row' }}
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
            mb={{ _: 2, sm: 6 }}
          >

            { pricingContent.map(item => (
              <GridItem
                key={`pricingCard${item.title}`}
                cols={pricingContent.length}
                mb={3}
                mr={{ _: 0, sm: 3 }}
              >

                <Flex
                  justifyContent="space-between"
                  height="300px"
                  flexDirection="column"
                  p="40px 30px 30px"
                  minWidth="280px"
                  style={{
                    backgroundColor: 'black', color: 'white'
                  }}
                >
                  <div>
                    <Heading maxWidth="230px" fontSize="30px" mb={2} align="left" level={2}>
                      {item.title}
                    </Heading>
                    <Text
                      fontSize="medium"
                      tag="div"
                    >
                      {item.text}
                    </Text>
                  </div>

                  {item.price && item.limits && (
                    <div>
                      <Text
                        fontWeight={800}
                        color={colors.primaryBrand}
                        fontSize="24px"
                        tag="div"
                      >
                        {item.price}
                      </Text>

                      <Text
                        fontWeight="800"
                        textTransform="uppercase"
                        fontSize="14px"
                        tag="div"
                      >
                        {item.limits}
                      </Text>
                    </div>
                  )}

                  {item.button && (
                    <div>
                      <Button
                        disabled={false}
                        size="medium"
                        type="button"
                        onClick={open}
                        title="Contact us"
                      >
                        Open Dialog
                      </Button>
                    </div>
                  )}

                </Flex>

              </GridItem>
            ))}
          </Flex>

        </ContainerContent>

        <SandboxPromoSection />

      </main>

      <Footer />

      <AnimatedDialog isOpen={showDialog} onDismiss={close}>
        <ContainerContent pb={5}>
          <Heading
            fontSize={{ _: '24px', md: '32px' }}
            fontWeight={200}
            mb={5}
          >
            Contact the Kekker support team
          </Heading>
          <QuestionForm />
        </ContainerContent>
      </AnimatedDialog>

    </div>
  );
};

PricingPage.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
};

export default withTheme(PricingPage);
