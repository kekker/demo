import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';

// Components
import Flex from '../Flex';
import ContainerSection from '../ContainerSection';
import BgImage from '../BgImage';
import ButtonLink from '../Button';
import ContainerContent from '../ContainerContent';

// Content
import Heading from '../Text/Heading';
import HeaderNav from './HeaderNav';


export const queryMainHeader = graphql`
  query {
    bgImage: file(absolutePath: { regex: "/kekker_bg.png/" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const MainHeader = ({ location, theme }) => (
  <StaticQuery
    query={queryMainHeader}
    render={data => (
      <ContainerSection height="100%">
        <BgImage
          height="100%"
          fluid={data.bgImage.childImageSharp.fluid}
          title="Kekker background cover"
        >
          <ContainerContent>
            <Flex direction="column" height="100%">
              <HeaderNav location={location} />

              <Flex
                height="100%"
                direction="column"
                justify="center"
                align="center"
              >
                <Heading
                  weight={800}
                  color={theme.colors.invertedText}
                  align="center"
                  lineh="1.1em"
                >
                  A
                  {' '}
                  <span style={{ color: theme.colors.primaryBrand }}>
                    platform
                  </span>
                  {' '}
                  for building
                  {' '}
                  <br />
                  <span style={{ fontSize: '1.4em' }}>decetralized apps</span>
                </Heading>
                <ButtonLink
                  isPrimary={false}
                  to="/"
                  title="Get started"
                />
              </Flex>
            </Flex>
          </ContainerContent>
        </BgImage>
      </ContainerSection>
    )}
  />
);

MainHeader.propTypes = {
  location: PropTypes.string,
  theme: PropTypes.node
};

export default withTheme(MainHeader);
