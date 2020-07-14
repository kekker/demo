import React from 'react';

import Heading from '../../fragments/TextStyles/Heading';
import ContainerSection from '../../fragments/ContainerSection';
import ContainerContent from '../../fragments/ContainerContent';
import Flex from '../../fragments/Flex';
import InvitationShortForm from '../Forms/InvitationShortForm';
import Hr from '../../fragments/TextStyles/Hr';


const SandboxSubmittedState = () => (
  <Flex flexDirection="column" alignItems="start">
    <Heading
      fontSize={{ _: '40px', md: '48px' }}
      fontWeight={100}
      mb={1}
    >
      Check your email for further instructions
    </Heading>
  </Flex>
);

class SandboxPromoSection extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmitted = this.onSubmitted.bind(this);

    this.state = {
      submitted: false
    };
  }

  onSubmitted = () => this.setState({ submitted: true })

  render() {
    const { submitted } = this.state;

    return (
      <ContainerSection height="unset">

        <ContainerContent
          mt={0}
          pt={0}
          pb={{ _: '30px', md: '60px' }}
        >
          <Hr backgroundColor="rgb(0, 0, 0, 0.8)" height={{ _: 4, sm: 1 }} mb={{ _: '30px', md: '60px' }} />

          { submitted ? (
            <SandboxSubmittedState />
          ) : (
            <Flex flexDirection="column" alignItems="start">
              <Heading
                fontSize={{ _: '30px', sm: '40px', md: '48px' }}
                fontWeight={{ _: 800, sm: 100 }}
                mb={1}
              >
                Test the platform’s powerful features&nbsp;now
              </Heading>
              <InvitationShortForm parentCallback={this.onSubmitted} />
            </Flex>
          )}
        </ContainerContent>
      </ContainerSection>
    );
  }
}

export default SandboxPromoSection;
