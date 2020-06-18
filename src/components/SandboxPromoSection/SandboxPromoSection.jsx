import React from 'react';

import Heading from '../TextStyles/Heading';
import Text from '../TextStyles/Text';
import ButtonLink from '../Button';
import ContainerSection from '../ContainerSection';
import ContainerContent from '../ContainerContent';
import Flex from '../Flex';


const SandboxPromoSection = () => (
  <ContainerSection height="unset">
    <ContainerContent style={{ borderTop: '1px solid hsla(0,0%,0%,0.2)' }} pt="50px" pb="60px">
      <Flex flexDirection="column" alignItems="center">
        <Heading
          fontWeight={300}
          mb={0}
        >
          Sandbox
        </Heading>
        <Text
          fontSize="15px"
          textTransform="uppercase"
          lineHeight="18px"
          fontWeight="bold"
          tag="div"
          textAlign="center"
          mt={1}
          mb="15px"
        >
          Test the platform&apos;s powerful features now
        </Text>
        <ButtonLink
          fontSize="medium"
          size="large"
          isPrimary
          to="/invitation"
          title="Sandbox Access"
        />
      </Flex>
    </ContainerContent>
  </ContainerSection>
);

export default SandboxPromoSection;
