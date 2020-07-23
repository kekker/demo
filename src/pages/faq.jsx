import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import {
  TabList, TabPanels, TabPanel
} from '@reach/tabs';


import Layout from '../components/fragments/Layout/Layout';
import AnimatedDialog from '../components/fragments/AnimatedDialog';
import QuestionForm, { HiddenQuestionForm } from '../components/blocks/Forms/QuestionForm';
import Heading from '../components/fragments/TextStyles/Heading';
import Button from '../components/fragments/Button/Button';

import { AnimatedTab, AnimatedTabs } from '../components/fragments/AnimatedTabs';

import faq from '../../content/faq.json';
import FAQSection from '../components/blocks/FAQSection';
import ContainerContent from '../components/fragments/ContainerContent';


const ContactButtonSection = styled.div`
  padding: 40px 0;
  @media (max-width: 700px) {
    border-top: 5px solid black;
  }
`;


const FAQPage = ({ location }) => {
  const [showDialog, setShowDialog] = React.useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  const sandboxFaq = faq.filter(question => question.tag.toLowerCase() === 'sandbox');
  const apiFaq = faq.filter(question => question.tag.toLowerCase() === 'api');

  return (
    <>
      <AnimatedDialog isOpen={showDialog} onDismiss={close}>
        <ContainerContent pb={3}>
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

      <Layout
        location={location.pathname}
        title="FAQ Page"
        description="Ask your question on Kekker Platform here"
      >
        <div>
          <Heading>FAQ</Heading>

          <AnimatedTabs color="black">

            <TabList style={{
              justifyContent: 'space-around'
            }}
            >
              <AnimatedTab index={0} style={{ background: 'transparent', flex: 1 }}>
                All Questions
              </AnimatedTab>
              <AnimatedTab index={1} style={{ flex: 2 }}>
                API
              </AnimatedTab>
              <AnimatedTab index={2} style={{ flex: 1 }}>
                Sandbox
              </AnimatedTab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <FAQSection list={faq} />
              </TabPanel>

              <TabPanel>
                <FAQSection list={apiFaq} />
              </TabPanel>

              <TabPanel>
                <FAQSection list={sandboxFaq} />
              </TabPanel>

            </TabPanels>
          </AnimatedTabs>

        </div>
        <ContactButtonSection>
          <Heading
            fontSize={{ _: '24px', md: '32px' }}
            fontWeight={200}
            mb={4}
          >
            Still need help?
            Ask the Kekker support team.
          </Heading>
          <Button
            disabled={false}
            size="medium"
            type="button"
            onClick={open}
            title="Contact us"
          >
            Open Dialog
          </Button>
          <HiddenQuestionForm />
        </ContactButtonSection>

      </Layout>
    </>
  );
};

FAQPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default FAQPage;
