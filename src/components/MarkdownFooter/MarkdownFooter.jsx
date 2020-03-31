import {Link} from "gatsby";
import React from "react";
import styled from "styled-components";

import Flex from "../Flex";
import Text from "../TextStyles/Text";
import Heading from "../TextStyles/Heading";

import prevArrow from "../../../static/assets/kekker-arrow.svg";

const NextDiv = styled.div`
  position: relative;
  
  text-align: end;

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: -27px;
    right: -55px;
    width: 60px;
    background-size: 60px 120px;
    height: 120px;
    background-image: url(${prevArrow});
  }
`;

const PrevDiv = styled.div`
  position: relative;
  
  text-align: end;

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: -27px;
    left: -55px;
    width: 60px;
    background-size: 60px 120px;
    height: 120px;
    transform: scale(-1, 1);
    background-image: url(${prevArrow});
  }
`;

const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
    
    &:hover {
        text-decoration: underline;
    }
    
    &:focus {
        text-decoration: underline;
    }
`;

const MarkdownFooter = ({ next, prev }) => (
    <Flex mt={6} justifyContent={'flex-end'}>
      {prev && (
        <>
          <Flex
              flexGrow={1}
              alignItems='flex-start'
              flexDirection='column'
          >
            <PrevDiv>
              <Text fontSize='small' fontWeight={400} textTransform='uppercase' mb={0} pb={0} tag={'div'}>Previous Page</Text>
              <StyledLink to={prev.to} rel="prev">
                  <Text isHeadingFont fontWeight={800} fontSize={'h1.sm'}>{prev.title}</Text>
              </StyledLink>
            </PrevDiv>
          </Flex>
        </>
      )}
      {next && (
        <>
          <Flex flexDirection='column' justifyContent={'flex-end'}>
            <NextDiv>
              <Text fontSize='small' fontWeight={400} textTransform='uppercase' mb={0} pb={0} tag={'div'}>Next Page</Text>
              <StyledLink to={next.to} rel="next">
                  <Text isHeadingFont fontWeight={800} fontSize={'h1.sm'}>{next.title}</Text>
              </StyledLink>
            </NextDiv>
          </Flex>
        </>
      )}
    </Flex>
);

export default MarkdownFooter;

