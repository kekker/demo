import {Link} from "gatsby";
import React from "react";
import styled from "styled-components";

import Flex from "../Flex";
import Text from "../TextStyles/Text";
import Heading from "../TextStyles/Heading";

import prevArrow from "../../../static/assets/kekker_arrow_2.svg";

const NextImg = styled.img`
    height: 80px;
    margin-bottom: 0;
    
  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    height: 100px;
  }
  
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    height: 170px;
  }
`;

const PrevImg = styled.img`
    height: 80px;
    margin-bottom: 0;
    
    transform: scale(-1, 1);

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    height: 100px;
  }
  
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    height: 170px;
  }
`;

const TestDisappear = styled(Text)`
    display: block;
    
    @media (max-width: ${props => props.theme.breakpoints.md}) {
        display: none;
    } 
`;

const StyledLink = styled(Link)`
    display: block;
    flex-basis: 50%;
    flex-grow: 1;
    color: black;
    text-decoration: none;
    
    line-height: 1.6em;
    
    &:hover span {
        text-decoration: underline;
    }
    
    &:focus span {
        text-decoration: underline;
    }
`;

const DivResponsiveMarginLeft = styled.div`
    margin-left: -40px;
    @media (max-width: ${props => props.theme.breakpoints.md}) {
        margin-left: -20px;
    } 
`;

const DivResponsiveMarginRight = styled.div`
    margin-right: -40px;
    @media (max-width: ${props => props.theme.breakpoints.md}) {
        margin-right: -20px;
    } 
`;

const FlexWithBorder = styled(Flex)`
    ${({ next, prev }) => next && prev ? `border-top: 1px solid #ececec;` : ''}
`;

const BorderDiv = styled.div`
    width: 1px;
    background-color: #ececec;
    height: 60px;
    
      @media (min-width: ${props => props.theme.breakpoints.sm}) {
        height: 70px;
      }
      
      @media (min-width: ${props => props.theme.breakpoints.md}) {
        height: 140px;
      }
`;

const MarkdownFooter = ({ next, prev }) => (
    <FlexWithBorder
        next={next}
        prev={prev}
        justifyContent={{_: 'center', md: 'flex-end'}}
        alignItems={'center'}>
      {prev && (
          <>
          <StyledLink to={prev.to} rel="prev" >
            <Flex
                alignItems='flex-start'>
              <PrevImg src={prevArrow} />
              <Flex
                  height={{_: '80px', sm: '100px', md: '170px'}}
                  flexDirection='column'
                  flexGrow={1}
                  alignItems='flex-start'
                  justifyContent='center'
              >
                <DivResponsiveMarginLeft style={{textAlign: 'start'}}>
                  <TestDisappear fontSize='small' fontWeight={400} textTransform='uppercase' mb={0} pb={0} tag={'div'}>Previous Page</TestDisappear>
                  <Text isHeadingFont fontWeight={800} fontSize={{_: 'extralarge', sm:'large', md: 'h1.sm'}}>{prev.title}</Text>
                </DivResponsiveMarginLeft>
              </Flex>
            </Flex>
          </StyledLink>
          </>
      )}
        {prev && next && (
            <BorderDiv></BorderDiv>
        )}
      {next && (
          <>
          <StyledLink to={next.to} rel="next">
            <Flex
                alignItems='flex-end'
            >
              <Flex
                  height={{_: '80px', sm: '100px', md: '170px'}}
                  flexDirection='column'
                  flexGrow={1}
                  alignItems='flex-end'
                  justifyContent='center'
              >
                <DivResponsiveMarginRight style={{textAlign: 'end'}}>
                  <TestDisappear fontSize='small' fontWeight={400} textTransform='uppercase' mb={0} pb={0} tag={'div'}>Next Page</TestDisappear>
                    <Text
                        isHeadingFont
                        fontWeight={800} fontSize={{_: 'extralarge', sm:'large', md: 'h1.sm'}}>{next.title}</Text>
                </DivResponsiveMarginRight>
              </Flex>
                <NextImg src={prevArrow} />
            </Flex>
          </StyledLink>
          </>
      )}
    </FlexWithBorder>
);

export default MarkdownFooter;

