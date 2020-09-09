import React from 'react';
import styled from 'styled-components'

import GridItem from '../../fragments/GridItem';
import Heading from '../../fragments/TextStyles/Heading';
import Text from '../../fragments/TextStyles/Text';
import Flex from '../../fragments/Flex';
import BenefitsProgressBar from './BenefitsProgressBar';

import clockIcon from '../../../../static/assets/kekker-benefits-clock-icon.svg';
import moneyIcon from '../../../../static/assets/kekker-benefits-money-icon.svg';


const StyledHeading = styled(Heading)`
  &::before {
    content: '';
    display: inline-block;
    vertical-align: bottom;  
    height: 100%;
  }
`;

const BenefitsProblemsBlock = () => (
  <Flex
    width="100%"
    flexDirection={{ _: 'column', sm: 'row' }}
    flexWrap="wrap"
    justifyContent="space-between"
    mb={0}
  >
    <GridItem
      cols={2}
      mb={{ _: 4, sm: 0 }}
    >
      <StyledHeading
        style={{ minHeight: '2.2em' }}
        mb={2}
        level={2}
        fontWeight={300}
      >
        In-house Development
      </StyledHeading>

      <Flex
        flexDirection={{ _: 'column', sm: 'row' }}
        flexWrap="wrap"
        justifyContent="space-between"
        mb={1}
      >
        <Text
          textTransform="uppercase"
          fontSize="12px"
          tag="div"
        >
          Idea
        </Text>
        <Text
          textTransform="uppercase"
          fontSize="12px"
          tag="div"
        >
          Product
        </Text>
      </Flex>

      <BenefitsProgressBar fill="100%" icon={clockIcon} price="$220k" />
      <BenefitsProgressBar fill="100%" icon={moneyIcon} price="10 months" />

    </GridItem>

    <GridItem
      cols={2}
      mb={{ _: 4, sm: 0 }}
    >
      <StyledHeading
        style={{ minHeight: '2.2em' }}
        mb={2}
        level={2}
        fontWeight={300}
      >
        DLT Platforms
      </StyledHeading>

      <Flex
        flexDirection={{ _: 'column', sm: 'row' }}
        flexWrap="wrap"
        justifyContent="space-between"
        mb={1}
      >
        <Text
          textTransform="uppercase"
          fontSize="12px"
          tag="div"
        >
          Idea
        </Text>
        <Text
          textTransform="uppercase"
          fontSize="12px"
          tag="div"
        >
          Product
        </Text>
      </Flex>

      <BenefitsProgressBar fill="80%" icon={clockIcon} price="$180k" />
      <BenefitsProgressBar fill="60%" icon={moneyIcon} price="8 months" />

    </GridItem>
  </Flex>
);

export default BenefitsProblemsBlock;
