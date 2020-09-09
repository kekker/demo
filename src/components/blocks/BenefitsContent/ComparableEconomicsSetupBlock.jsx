import React from 'react';

import GridItem from '../../fragments/GridItem';
import Text from '../../fragments/TextStyles/Text';
import Flex from '../../fragments/Flex';


const ComparableEconomicsSetupBlock = () => (
  <div>
    <Flex
      style={{ borderBottom: '1px solid #F1F1F1'}}
      width="100%"
      flexDirection="row"
      pb={3}
    >
      <GridItem hasOffsets={false} cols={4} />

      <GridItem hasOffsets={false} pr={1} cols={4}>
        <Text tag="span" textTransform="uppercase" fontSize="12px">
          In-house development
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
          Recruit DLT/DFS developers (recruitment cost)
        </Text>
      </GridItem>

      <GridItem hasOffsets={false} pr={1} cols={4}>
        <Text fontWeight={600} tag="div" m={0} p={0} fontSize="small">
          $30k
        </Text>
        <Text tag="div" m={0} p={0} fontSize="small">
          3 FTE x 2 months
        </Text>
      </GridItem>

      <GridItem hasOffsets={false} pr={1} cols={4}>
        <Text fontWeight={600} tag="div" m={0} p={0} fontSize="small">
          $30k
        </Text>
        <Text tag="div" m={0} p={0} fontSize="small">
          3 FTE x 2 months
        </Text>
      </GridItem>

      <GridItem hasOffsets={false} pr={1} cols={4}>
        <Text fontWeight={600} tag="div" m={0} p={0} fontSize="small">
          $0
        </Text>
        <Text tag="div" m={0} p={0} fontSize="small">
          0 months (no DLT expertise needed)
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
          Setup initial infrastructure (depending on chosen DLT stack)
        </Text>
      </GridItem>

      <GridItem hasOffsets={false} pr={1} cols={4}>
        <Text fontWeight={600} tag="div" m={0} p={0} fontSize="small">
          $20k
        </Text>
        <Text tag="div" m={0} p={0} fontSize="small">
          1 FTE x 2 months
        </Text>
      </GridItem>

      <GridItem hasOffsets={false} pr={1} cols={4}>
        <Text fontWeight={600} tag="div" m={0} p={0} fontSize="small">
          $0k
        </Text>
        <Text tag="div" m={0} p={0} fontSize="small">
          0-2 weeks
        </Text>
      </GridItem>

      <GridItem hasOffsets={false} pr={1} cols={4}>
        <Text fontWeight={600} tag="div" m={0} p={0} fontSize="small">
          $0
        </Text>
        <Text tag="div" m={0} p={0} fontSize="small">
          0 months (Sandbox has most popular DLT infrastructures setup)
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
          Develop initial middleware
        </Text>
      </GridItem>

      <GridItem hasOffsets={false} pr={1} cols={4}>
        <Text fontWeight={600} tag="div" m={0} p={0} fontSize="small">
          $90k
        </Text>
        <Text tag="div" m={0} p={0} fontSize="small">
          3 FTE x 3 months
        </Text>
      </GridItem>

      <GridItem hasOffsets={false} pr={1} cols={4}>
        <Text fontWeight={600} tag="div" m={0} p={0} fontSize="small">
          $75k
        </Text>
        <Text tag="div" m={0} p={0} fontSize="small">
          2 FTE + $5k network maintenance x 3 months
        </Text>
      </GridItem>

      <GridItem hasOffsets={false} pr={1} cols={4}>
        <Text fontWeight={600} tag="div" m={0} p={0} fontSize="small">
          $0
        </Text>
        <Text tag="div" m={0} p={0} fontSize="small">
          0 months (Kekker Sandbox provides Kekker Middleware with full documentation: API, Scenarios, etc.)
        </Text>
      </GridItem>
    </Flex>

    <Flex
      style={{ borderBottom: '2px solid #FFDE00'}}
      width="100%"
      flexDirection="row"
      pb={3}
      pt={3}
    >
      <GridItem hasOffsets={false} pr={1} cols={4}>
        <Text tag="span" fontSize="small">
          Develop and maintain DLT infrastructure / middleware for MVP
        </Text>
      </GridItem>

      <GridItem hasOffsets={false} pr={1} cols={4}>
        <Text fontWeight={600} tag="div" m={0} p={0} fontSize="small">
          $90k
        </Text>
        <Text tag="div" m={0} p={0} fontSize="small">
          3 FTE x 3 months
        </Text>
      </GridItem>

      <GridItem hasOffsets={false} pr={1} cols={4}>
        <Text fontWeight={600} tag="div" m={0} p={0} fontSize="small">
          $75k
        </Text>
        <Text tag="div" m={0} p={0} fontSize="small">
          2 FTE + $5k network maintenance x 3 months
        </Text>
      </GridItem>

      <GridItem hasOffsets={false} pr={1} cols={4}>
        <Text fontWeight={600} tag="div" m={0} p={0} fontSize="small">
          $10k
        </Text>
        <Text tag="div" m={0} p={0} fontSize="small">
          1 FTE* x 1 month (embed Kekker Middleware to your product)
          * provided by Kekker
        </Text>
      </GridItem>
    </Flex>

    <Flex
      style={{ borderBottom: '2px solid #FFDE00'}}
      width="100%"
      flexDirection="row"
      pb={3}
      pt={3}
    >
      <GridItem hasOffsets={false} pr={1} cols={4}>
        <Text tag="span" fontSize="small" fontWeight={600}>
          Total, Cost & Time
        </Text>
      </GridItem>

      <GridItem hasOffsets={false} pr={1} cols={4}>
        <Text fontWeight={600} tag="div" m={0} p={0} fontSize="small">
          $230k
        </Text>
        <Text fontWeight={600} tag="div" m={0} p={0} fontSize="small">
          10 months
        </Text>
      </GridItem>

      <GridItem hasOffsets={false} pr={1} cols={4}>
        <Text fontWeight={600} tag="div" m={0} p={0} fontSize="small">
          $180k
        </Text>
        <Text fontWeight={600} tag="div" m={0} p={0} fontSize="small">
          8 months
        </Text>
      </GridItem>

      <GridItem hasOffsets={false} pr={1} cols={4}>
        <Text fontWeight={600} tag="div" m={0} p={0} fontSize="small">
          $10k
        </Text>
        <Text fontWeight={600} tag="div" m={0} p={0} fontSize="small">
          1 month
        </Text>
      </GridItem>
    </Flex>

    <Flex
      style={{ borderBottom: '2px solid #FFDE00' }}
      width="100%"
      flexDirection="row"
      pb={3}
      pt={3}
    >
      <GridItem hasOffsets={false} pr={1} cols={4}>
        <Text tag="span" fontSize="small" fontWeight={600}>
          Total Upfront Saving
        </Text>
      </GridItem>

      <GridItem hasOffsets={false} cols={4} />

      <GridItem hasOffsets={false} cols={4} />

      <GridItem hasOffsets={false} pr={1} cols={4}>
        <Text fontWeight={600} tag="div" m={0} p={0} fontSize="small">
          $170-220k
        </Text>
        <Text fontWeight={600} tag="div" m={0} p={0} fontSize="small">
          7-9 months
        </Text>
      </GridItem>
    </Flex>

  </div>
);

export default ComparableEconomicsSetupBlock;
