import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import Flex from '../../fragments/Flex';
import Text from '../../fragments/TextStyles/Text';

import prevArrow from '../../../../static/assets/kekker_arrow_2.svg';

const NextImg = styled.img`
  height: 50px;
  margin-bottom: 0;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    height: 70px;
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    height: 110px;
  }
`;

const PrevImg = styled.img`
  height: 50px;
  margin-bottom: 0;

  transform: scale(-1, 1);

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    height: 70px;
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    height: 110px;
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

const FlexWithBorder = styled(Flex)`
  ${({ next, prev }) => (next || prev ? 'border-top: 1px solid hsla(0,0%,0%,0.2);;' : '')}
`;

const BorderDiv = styled.div`
  width: 1px;
  background-color: hsla(0,0%,0%,0.2);
  display: none;
  height: 60px;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    height: 70px;
    display: block;
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    height: 140px;
  }
`;

const MarkdownFooter = ({
  next, prev, next_title, prev_title
}) => (
  <FlexWithBorder
    next={next}
    prev={prev}
    justifyContent={{ _: 'center', md: 'flex-end' }}
    alignItems="center"
  >
    {prev && (
      <>
        <StyledLink to={prev.to} rel="prev">
          <Flex alignItems="center">
            <PrevImg src={prevArrow} />
            <Flex
              height={{ _: '80px', sm: '100px', md: '170px' }}
              flexDirection="column"
              flexGrow={1}
              alignItems="flex-start"
              justifyContent="center"
            >
              <div style={{ textAlign: 'start' }}>
                <TestDisappear
                  fontSize="small"
                  fontWeight={400}
                  textTransform="uppercase"
                  mb={0}
                  pb={0}
                  tag="div"
                >
                  Previous Page
                </TestDisappear>
                <Text
                  isHeadingFont
                  fontWeight={800}
                  fontSize={{ _: '17px', sm: 'extralarge', md: 'h1.sm' }}
                >
                  {prev_title || prev.title}
                </Text>
              </div>
            </Flex>
          </Flex>
        </StyledLink>
      </>
    )}
    {prev && next && <BorderDiv />}
    {next && (
      <>
        <StyledLink to={next.to} rel="next">
          <Flex alignItems="center">
            <Flex
              height={{ _: '80px', sm: '100px', md: '170px' }}
              flexDirection="column"
              flexGrow={1}
              alignItems="flex-end"
              justifyContent="center"
            >
              <div style={{ textAlign: 'end' }}>
                <TestDisappear
                  fontSize="small"
                  fontWeight={400}
                  textTransform="uppercase"
                  mb={0}
                  pb={0}
                  tag="div"
                >
                  Next Page
                </TestDisappear>
                <Text
                  isHeadingFont
                  fontWeight={800}
                  fontSize={{ _: '17px', sm: 'extralarge', md: 'h1.sm' }}
                >
                  {next_title || next.title}
                </Text>
              </div>
            </Flex>
            <NextImg src={prevArrow} />
          </Flex>
        </StyledLink>
      </>
    )}
  </FlexWithBorder>
);

export default MarkdownFooter;
