import {Link} from "gatsby";
import React from "react";
import styled from "styled-components";

import Flex from "../Flex";
import Text from "../TextStyles/Text";
import Heading from "../TextStyles/Heading";

import prevArrow from "../../../static/assets/kekker_arrow_2.svg";

const NextImg = styled.img`
    height: 120px;
    margin-bottom: 0;
    
  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    height: 140px;
  }
  
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    height: 170px;
  }
`;

const PrevImg = styled.img`
    height: 120px;
    margin-bottom: 0;
    
    transform: scale(-1, 1);

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    height: 140px;
  }
  
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    height: 170px;
  }
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
        justifyContent={{_: 'center', md: 'flex-end'}}
        alignItems={'center'}
        flexDirection={{_ : 'column', md: 'row'}}>
      {prev && (
          <>
            <Flex
                ml={'-20px'}
                flexBasis={'50%'}
                flexGrow={1}
                alignItems='flex-start'>
              <PrevImg src={prevArrow} />
              <Flex
                  height={{_: '120px', sm: '140px', md: '170px'}}
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
                  height={{_: '120px', sm: '140px', md: '170px'}}
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

