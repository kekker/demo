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
import BgImage from '../components/BgImage';

const StyledImage = styled(Img)`
  width: 100%;
  margin-bottom: 0;
`;

// Content
const jsonContent = require('../../content/home');

const BlogIndex = ({ data, location }) => {
  const blogTitle = data.site.siteMetadata.title;
  const { description } = data.site.siteMetadata;

  const {
    platformBgImage, platformImage, sandboxBgImage, sandboxImage
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
            >
              <GridItem
                  cols={3}
                  mb={{ _: 4, sm: 0 }}
              >
                <Heading mt={0} mb={2} align="left" level={2}>
                  Fast
                </Heading>
                <Text tag={'p'}>
                  Cut your time to market by 6 to 18 months and save hundreds of thousands of dollars in man-hours by focusing on building business applications, not the setup & maintenance of your DLT solution.
                </Text>
              </GridItem>
              <GridItem
                  cols={3}
                  mb={{ _: 4, sm: 0 }}
              >
                <Heading mt={0} mb={2} align="left" level={2}>
                  Flexible
                </Heading>
                <Text tag={'p'}>
                  Choose DLT/DFS stack (Ethereum, Hyperledger or other) and a set of cryptography tools to meet your business, legal and regulatory requirements
                </Text>
              </GridItem>
              <GridItem
                  cols={3}
                  mb={{ _: 4, sm: 0 }}
              >
                <Heading mt={0} mb={2} align="left" level={2}>
                  Scalable
                </Heading>
                <Text tag={'p'}>
                  Cluster solutions to meet organizational and functional business requirements for different geographical, functional and technological networks
                </Text>
              </GridItem>
            </Flex>
          </ContainerContent>

          <ContainerContent>
            <Heading level={2} mb={3}>
              {jsonContent.KekkerPlatformSectionHeader}
            </Heading>
            <Text tag="p" style={{ maxWidth:'700px'}}>
              Kekker is middleware with a set of DLT/DFS technologies and APIs that <strong> lets you build and run decentralized blockchain-powered applications </strong> without blockchain expertise.
            </Text>
            <Text tag='p' style={{ maxWidth:'700px'}}>
              Use Kekker’s services to operate your decentralized environment or manage your secured distributed solution network independently.
            </Text>
          </ContainerContent>

          <ContainerSection width="100%" height="60vw" maxHeight="700px">
            <BgImage
              maxHeight="700px"
              height="60vw"
              fluid={platformBgImage.childImageSharp.fluid}
              title="Kekker Platform section background cover"
              color="#FFFFFF"
            >
              <ContainerContent pt={{ _: 2, sm: 0 }} pb={{ _: 2, sm: 0 }}>
                <Flex
                  width="100%"
                  height="100%"
                  justifyContent="center"
                  alignItems="center"
                >
                  <StyledImage
                    fluid={platformImage.childImageSharp.fluid}
                    title="Kekker Platform overview"
                  />
                </Flex>
              </ContainerContent>
            </BgImage>
          </ContainerSection>

          <ContainerSection bg={'#000000'} color={'#FFFFFF'}>
            <ContainerContent>
              <Heading level={2} mb={3}>
                {jsonContent.KekkerSandboxSectionHeader}
              </Heading>
              <Text tag="p" style={{ maxWidth:'700px'}}>
                Kekker Sandbox is free and  <strong> provides a unique opportunity to build a prototype </strong> or MVP on any of the popular blockchains.
              </Text>
              <Text tag={'p'} mb={0} style={{ maxWidth:'700px'}}>
                Don’t bother about infrastructure - just start building your decentralized application right away.
                <strong> Yes, that’s right - the sandbox is free! </strong>
                At any time you can transfer your decentralized application to your own infrastructure or entrust us with hosting and support customized for your needs.
              </Text>
            </ContainerContent>
          </ContainerSection>

          <ContainerSection
            width="100%"
            maxHeight={{ md: '900px', lg: '1000px' }}
            height="90vw"
          >
            <BgImage
              maxHeight={{ md: '900px', lg: '1000px' }}
              height="90vw"
              fluid={sandboxBgImage.childImageSharp.fluid}
              title="Kekker Platform section background cover"
              color="#FFFFFF"
            >
              <ContainerContent>
                <Flex
                  width="100%"
                  height="100%"
                  justifyContent="center"
                  alignItems="center"
                >
                  <StyledImage
                    style={{ marginTop: '-70px'}}
                    fluid={sandboxImage.childImageSharp.fluid}
                    title="Kekker Sandbox overview"
                  />
                </Flex>
              </ContainerContent>
            </BgImage>
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
                  fontSize="large"
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
    platformBgImage: file(
      absolutePath: { regex: "/kekker_mainpage_platform_background_v1.jpg/" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    platformImage: file(
      absolutePath: { regex: "/kekker_mainpage_platform_v1.png/" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sandboxBgImage: file(absolutePath: { regex: "/kekker_mainpage_bg2.jpg/" }) {
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
