import React from 'react';

import Heading from '../TextStyles/Heading';
import Text from '../TextStyles/Text';
import ContainerSection from '../ContainerSection';
import ContainerContent from '../ContainerContent';
import Flex from '../Flex';
import InvitationShortForm from '../Forms/InvitationShortForm';


const SandboxSubmittedState = () => (
  <Flex flexDirection="column" alignItems="start">
    <Heading
      fontSize={{ _: '40px', md: '48px' }}
      fontWeight={100}
      mb={1}
    >
      Check your email for further instructions
    </Heading>
    <Text
      fontSize="16px"
      lineHeight="18px"
      fontWeight="bold"
      tag="div"
      mt={2}
    >
      If you have any questions, contact us at
      {' '}
      <a style={{ color: '#000000' }} href="mailto:info@kekker.com">info@kekker.com</a>
    </Text>
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
          style={{ borderTop: '1px solid hsla(0,0%,0%,0.8)' }}
          mt={{ _: 0, md: '60px' }}
          pt={{ _: '30px', md: '60px' }}
          pb={{ _: '30px', md: '60px' }}
        >
          { submitted ? (
            <SandboxSubmittedState />
          ) : (
            <Flex flexDirection="column" alignItems="start">
              <Heading
                fontSize={{ _: '40px', md: '48px' }}
                fontWeight={100}
                mb={0}
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
