import React from 'react';

import GridItem from '../../fragments/GridItem';
import Text from '../../fragments/TextStyles/Text';
import Flex from '../../fragments/Flex';


const ComparableEconomicsSupportBlock = () => (
  <div>
    <Flex
      style={{ borderBottom: '1px solid #F1F1F1'}}
      width="100%"
      flexDirection="row"
      pb={3}
    >
      <GridItem hasOffsets={false} pr={1} cols={4} />

      <GridItem hasOffsets={false} pr={1} cols={4}>
        <Text tag="span" textTransform="uppercase" fontSize="12px">
          In-house dedvelopment
        </Text>
      </GridItem>

      <GridItem hasOffsets={false} pr={1} cols={4}>
        <Text tag="span" textTransform="uppercase" fontSize="12px">
          DLT-Platforms
        </Text>
      </GridItem>

      <GridItem hasOffsets={false} pr={1} cols={4}>
        <Text tag="span" textTransform="uppercase" fontSize="12px">
          Kekker
        </Text>
      </GridItem>
    </Flex>

    <Flex
      style={{ borderBottom: '1px solid #F1F1F1'}}
      width="100%"
      flexDirection="row"
      pb={3}
      pt={3}
    >
      <GridItem hasOffsets={false} pr={1} cols={4}>
        <Text tag="span" fontSize="small">
          Commercial infrastructure hosting and maintenance  (per month, depends on particular cases)
        </Text>
      </GridItem>

      <GridItem hasOffsets={false} pr={1} cols={4}>
        <Text fontWeight={600} tag="div" m={0} p={0} fontSize="small">
          $10k
        </Text>
        <Text tag="div" m={0} p={0} fontSize="small">
          1 FTE
        </Text>
      </GridItem>

      <GridItem hasOffsets={false} pr={1} cols={4}>
        <Text fontWeight={600} tag="span" m={0} p={0} fontSize="small">
          $5k
        </Text>
      </GridItem>

      <GridItem hasOffsets={false} pr={1} cols={4}>
        <Text fontWeight={600} tag="span" m={0} p={0} fontSize="small">
          $5k
        </Text>
      </GridItem>
    </Flex>

    <Flex
      style={{ borderBottom: '1px solid #F1F1F1'}}
      width="100%"
      flexDirection="row"
      pb={3}
      pt={3}
    >
      <GridItem hasOffsets={false} pr={1} cols={4}>
        <Text tag="span" fontSize="small">
          Middleware maintenance and development (per month)
        </Text>
      </GridItem>

      <GridItem hasOffsets={false} pr={1} cols={4}>
        <Text fontWeight={600} tag="div" m={0} p={0} fontSize="small">
          $10k
        </Text>
        <Text tag="div" m={0} p={0} fontSize="small">
          1 FTE (support and maintenance)
        </Text>
      </GridItem>

      <GridItem hasOffsets={false} pr={1} cols={4}>
        <Text fontWeight={600} tag="div" m={0} p={0} fontSize="small">
          $10k
        </Text>
        <Text tag="div" m={0} p={0} fontSize="small">
          1 FTE (support and maintenance)
        </Text>
      </GridItem>

      <GridItem hasOffsets={false} pr={1} cols={4}>
        <Text fontWeight={600} tag="div" m={0} p={0} fontSize="small">
          $15k
        </Text>
        <Text tag="div" m={0} p={0} fontSize="small">
          Middleware license fee (for commercial version only)
        </Text>
      </GridItem>
    </Flex>

    <Flex
      style={{ borderBottom: '1px solid #F1F1F1'}}
      width="100%"
      flexDirection="row"
      pb={3}
      pt={3}
    >
      <GridItem hasOffsets={false} pr={1} cols={4}>
        <Text tag="span" fontSize="small">
          TX fee (only for cross-cluster or cross-blockchain TXs)
        </Text>
      </GridItem>

      <GridItem hasOffsets={false} pr={1} cols={4}>
        <Text tag="span" m={0} p={0} fontSize="small">
          N/A
        </Text>
      </GridItem>

      <GridItem hasOffsets={false} pr={1} cols={4}>
        <Text tag="span" m={0} p={0} fontSize="small">
          N/A
        </Text>
      </GridItem>

      <GridItem hasOffsets={false} pr={1} cols={4}>
        <Text tag="span" m={0} p={0} fontSize="small">
          (depends on particular cases)
        </Text>
      </GridItem>
    </Flex>

    <Flex
      style={{ borderBottom: '1px solid #F1F1F1' }}
      width="100%"
      flexDirection="row"
      pb={3}
      pt={3}
    >
      <GridItem hasOffsets={false} pr={1} cols={4}>
        <Text tag="span" fontSize="small">
          Technical support
        </Text>
      </GridItem>

      <GridItem hasOffsets={false} pr={1} cols={4}>
        <Text tag="span" fontSize="small">
          N/A
        </Text>
      </GridItem>

      <GridItem hasOffsets={false} pr={1} cols={4}>
        <Text tag="span" fontSize="small">
          Man Hour fee
        </Text>
      </GridItem>

      <GridItem hasOffsets={false} pr={1} cols={4}>
        <Text tag="span" fontSize="small">
          Man Hour fee
        </Text>
      </GridItem>
    </Flex>

    <Flex
      style={{ borderBottom: '1px solid #F1F1F1' }}
      width="100%"
      flexDirection="row"
      pb={3}
      pt={3}
    >
      <GridItem hasOffsets={false} pr={1} cols={4}>
        <Text tag="span" fontSize="small">
          Transition to a new infrastructure (if required)
        </Text>
      </GridItem>

      <GridItem hasOffsets={false} pr={1} cols={4}>
        <Text fontWeight={600} tag="div" m={0} p={0} fontSize="small">
          $100k
        </Text>
        <Text tag="div" m={0} p={0} fontSize="small">
          4 month (50% of the setup cost)
        </Text>
      </GridItem>

      <GridItem hasOffsets={false} pr={1} cols={4}>
        <Text fontWeight={600} tag="div" m={0} p={0} fontSize="small">
          $75k
        </Text>
        <Text tag="div" m={0} p={0} fontSize="small">
          3 months (50% of the setup cost)
        </Text>
      </GridItem>

      <GridItem hasOffsets={false} pr={1} cols={4}>
        <Text fontWeight={600} tag="div" m={0} p={0} fontSize="small">
          $5k
        </Text>
        <Text tag="div" m={0} p={0} fontSize="small">
          0.5 month (infrastructure setup only)
        </Text>
      </GridItem>

    </Flex>

  </div>
);

export default ComparableEconomicsSupportBlock;
