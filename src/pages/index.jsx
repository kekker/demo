import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

// Components
import styled from 'styled-components';
import Seo from '../components/SEO/Seo';
import { MainHeader } from '../components/Header';
import ContainerContent from '../components/ContainerContent';
import Footer from '../components/Footer';
import Theme from '../components/Theme';
import ButtonLink from '../components/Button';
import Flex from '../components/Flex';
import GridItem from '../components/GridItem';
import ContainerSection from '../components/ContainerSection';
import Heading from '../components/TextStyles/Heading';
import Text from '../components/TextStyles/Text';

const StyledImage = styled(Img)`
  width: 100%;
  margin-bottom: 0;
  margin-top: -50px;
`;

// Content
const jsonContent = require('../../content/home');

const BlogIndex = ({ data, location }) => {
  const blogTitle = data.site.siteMetadata.title;
  const { description } = data.site.siteMetadata;

  const {
    platformImage, sandboxImage
  } = data;

  return (
    <Theme>
      <div>
        <Seo title={blogTitle} description={description} />

        <MainHeader location={location.pathname} />

        <main style={{ marginTop: 0}}>

          <ContainerContent>
            <Flex
              flexDirection={{ _: 'column', sm: 'row' }}
              flexWrap="wrap"
              justifyContent="space-between"
              mb={{ _: 0, sm: 6 }}
            >
              { jsonContent.benefits.map(item => (
                <GridItem
                  key={`benefits${item.header}`}
                  cols={jsonContent.benefits.length}
                  mb={{ _: 4, sm: 0 }}
                >
                  <Heading mb={2} align="left" level={2}>
                    {item.header}
                  </Heading>
                  {item.content.map(benefitString => (
                    <Text
                      key={`benefitsCont${benefitString.slice(0, 5)}`}
                      fontSize="medium"
                      tag="div"
                    >
                      {benefitString}
                    </Text>
                  ))}
                </GridItem>
              ))}
            </Flex>

            <hr style={{ marginBottom: 0, backgroundColor: 'hsla(0,0%,0%,0.4)'}}/>
          </ContainerContent>

          <ContainerSection width="100%">
            <ContainerContent>
              <Heading mb="25px" mt={0} level={2}>
                {jsonContent.KekkerPlatformSectionHeader}
              </Heading>
              <div style={{ maxWidth: '600px'}}>
                { jsonContent.KekkerPlatformSectionContent.map(paragraph => (
                    <Text
                        key={`platformCont${paragraph.slice(0, 5)}`}
                        fontSize="medium"
                        tag="p"
                    >
                      { paragraph }
                    </Text>
                ))}
              </div>
              <StyledImage
                  fluid={platformImage.childImageSharp.fluid}
                  title="Kekker Platform overview"
              />
            </ContainerContent>
          </ContainerSection>

          <ContainerSection
              width="100%"
              bg='#000000'
              color='#FFFFFF'
          >
            <ContainerContent>
              <Heading mb="25px" mt={0} level={2}>
                {jsonContent.KekkerSandboxSectionHeader}
              </Heading>
              <div style={{ maxWidth: '600px'}}>
                { jsonContent.KekkerSandboxSectionContent.map(paragraph => (
                    <Text
                        key={`sandboxCont${paragraph.slice(0, 5)}`}
                        fontSize="medium"
                        tag="p"
                    >
                      { paragraph }
                    </Text>
                ))}
              </div>
              <StyledImage
                  fluid={sandboxImage.childImageSharp.fluid}
                  title="Kekker Sandbox overview"
              />
            </ContainerContent>
          </ContainerSection>

          <ContainerSection bg="#FFFFFF">
            <ContainerContent pb={{ _: 4, sm: 6 }}>
              <Flex flexDirection="column" alignItems="center">
                <Heading
                  fontWeight={600}
                  letterSpacing="-0.04em"
                  color="primaryText"
                  textAlign="center"
                  lineHeight="1.1em"
                  fontSize={{
                    xs: 'h1.sm',
                    sm: 'h1.md',
                    md: 'h1.lg',
                    lg: 'h1.extralg',
                  }}
                >
                  Create a Decentralized App
                  <br />
                  <span style={{ letterSpacing: '-0.04em', fontWeight: '300' }}>
                    in 10 Minutes
                  </span>
                </Heading>
                <ButtonLink
                  to={jsonContent.getStartedButtonLink}
                  size="large"
                  fontSize="medium_"
                  isPrimary
                  title="Get started"
                />
              </Flex>
            </ContainerContent>
          </ContainerSection>
        </main>

        <Footer />
      </div>
    </Theme>
  );
};

BlogIndex.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    platformImage: file(
      absolutePath: { regex: "/kekker_mainpage_platform_v3.png/" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sandboxImage: file(
      absolutePath: { regex: "/kekker_mainpage_sandbox_transparent.png/" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
