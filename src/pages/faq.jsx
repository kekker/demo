import React from 'react';
import PropTypes from 'prop-types';

// Components
import {
  TabList, TabPanels, TabPanel
} from '@reach/tabs';


import Layout from '../components/Layout/Layout';
import AnimatedDialog from '../components/AnimatedDialog';
import QuestionForm from '../components/Forms/QuestionForm';
import Heading from '../components/TextStyles/Heading';
import Button from '../components/Button/Button';

import { AnimatedTab, AnimatedTabs } from '../components/AnimatedTabs';

import faq from '../../content/faq.json';
import FAQSection from '../components/blocks/FAQSection';


const FAQPage = ({ location }) => {
  const [showDialog, setShowDialog] = React.useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  const sandboxFaq = faq.filter(question => question.tag.toLowerCase() === 'sandbox');
  const apiFaq = faq.filter(question => question.tag.toLowerCase() === 'api');
  const platformFaq = faq.filter(question => question.tag.toLowerCase() === 'platform');

  return (
    <>
      <Layout
        location={location.pathname}
        title="FAQ Page"
        description="Ask your question on Kekker Platform here"
      >
        <div>
          <Heading>FAQ</Heading>

          <AnimatedTabs color="black">

            <TabList style={{ justifyContent: 'space-around' }}>
              <AnimatedTab index={0} style={{ background: 'transparent', flex: 1 }}>
                All Questions
              </AnimatedTab>
              <AnimatedTab index={1} style={{ flex: 2 }}>
                API
              </AnimatedTab>
              <AnimatedTab index={2} style={{ flex: 1 }}>
                Sandbox
              </AnimatedTab>
              <AnimatedTab index={3} style={{ flex: 1 }}>
                Platform
              </AnimatedTab>
            </TabList>

            <TabPanels style={{ padding: 10 }}>
              <TabPanel>
                <FAQSection list={faq} />
              </TabPanel>

              <TabPanel>
                <FAQSection list={apiFaq} />
              </TabPanel>

              <TabPanel>
                <FAQSection list={sandboxFaq} />
              </TabPanel>

              <TabPanel>
                <FAQSection list={platformFaq} />
              </TabPanel>

            </TabPanels>
          </AnimatedTabs>

        </div>
        <div>
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
        </div>

      </Layout>

      <AnimatedDialog isOpen={showDialog} onDismiss={close}>
        <div style={{ padding: '75px' }}>
          <Heading
            fontSize={{ _: '24px', md: '32px' }}
            fontWeight={200}
            mb={5}
          >
            Contact the Kekker support team
          </Heading>
          <QuestionForm />
        </div>
      </AnimatedDialog>
    </>
  );
};

FAQPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default FAQPage;
