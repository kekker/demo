import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import ContainerContent from '../../fragments/ContainerContent';
import Flex from '../../fragments/Flex';
import Heading from '../../fragments/TextStyles/Heading';
import BgImage from '../../fragments/BgImage';


export const queryBgImage = graphql`
    query {
        bgImage: file(
            absolutePath: { regex: "/kekker_samples_image.png/" }
        ) {
            childImageSharp {
                fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

const SamplesImage = () => (
  <StaticQuery
    query={queryBgImage}
    render={data => (
      <BgImage
        height={{
          xs: '100px',
          md: '200px'
        }}
        fluid={data.bgImage.childImageSharp.fluid}
        title="Kekker background cover"
        color="#000000"
      >
        <ContainerContent pt="0">
          <Flex flexDirection="column" height="100%">
            <Flex
              height="100%"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Heading
                mb={0}
                fontWeight={300}
                letterSpacing="-0.04em"
                color="invertedText"
                textAlign="center"
                lineHeight="1.1em"
                fontSize={{
                  xs: 'h1.sm',
                  sm: 'h1.md',
                  md: 'h1.lg',
                }}
              >
                Real-World Kekker DApp
              </Heading>
            </Flex>
          </Flex>
        </ContainerContent>
      </BgImage>
    )}
  />
);

export default SamplesImage;
