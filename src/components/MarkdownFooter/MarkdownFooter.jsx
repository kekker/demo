import {Link} from "gatsby";
import React from "react";
import styled from "styled-components";

import Flex from "../Flex";
import Text from "../TextStyles/Text";
import Heading from "../TextStyles/Heading";

import prevArrow from "../../../static/assets/kekker_arrow_2.svg";

const NextImg = styled.img`
    height: 170px;
    margin-bottom: 0;
`;

const PrevImg = styled.img`
    height: 170px;
    margin-bottom: 0;
    
    transform: scale(-1, 1);
`;

const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
    
    line-height: 1.6em;
    
    &:hover {
        text-decoration: underline;
    }
    
    &:focus {
        text-decoration: underline;
    }
`;

const MarkdownFooter = ({ next, prev }) => (
    <Flex
        justifyContent={{_: 'center', sm: 'flex-end'}}
        alignItems={'center'}
        flexDirection={{_ : 'column', sm: 'row'}}>
      {prev && (
          <>
            <Flex
                ml={'-20px'}
                flexBasis={'50%'}
                flexGrow={1}
                alignItems='flex-start'>
              <PrevImg src={prevArrow} />
              <Flex
                  height={'170px'}
                  flexDirection='column'
                  flexGrow={1}
                  alignItems='flex-start'
                  justifyContent='center'
              >
                <div style={{textAlign: 'start', marginLeft: '-40px'}}>
                  <Text fontSize='small' fontWeight={400} textTransform='uppercase' mb={0} pb={0} tag={'div'}>Previous Page</Text>
                  <StyledLink to={prev.to} rel="prev">
                    <Text isHeadingFont fontWeight={800} fontSize={{_: 'extralarge', sm:'h1.sm'}}>{prev.title}</Text>
                  </StyledLink>
                </div>
              </Flex>
            </Flex>
          </>
      )}
        {prev && next && (
            <div style={{height: '65%', width: '2px', backgroundColor: '#ececec'}}></div>
        )}
      {next && (
          <>
            <Flex
                flexBasis={'50%'}
                flexGrow={1}
                alignItems='flex-end'
                mr={'-20px'}
            >
              <Flex
                  height={'170px'}
                  flexDirection='column'
                  flexGrow={1}
                  alignItems='flex-end'
                  justifyContent='center'
              >
                <div style={{textAlign: 'end', marginRight: '-40px'}}>
                  <Text fontSize='small' fontWeight={400} textTransform='uppercase' mb={0} pb={0} tag={'div'}>Next Page</Text>
                  <StyledLink to={next.to} rel="next">
                    <Text isHeadingFont fontWeight={800} fontSize={{_: 'extralarge', sm:'h1.sm'}}>{next.title}</Text>
                  </StyledLink>
                </div>
              </Flex>
                <NextImg src={prevArrow} />
            </Flex>
          </>
      )}
    </Flex>
);

export default MarkdownFooter;

