import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

// Components
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
import Text from "../components/TextStyles/Text";

// Content
const jsonContent = require('../../content/home');

const BlogIndex = ({ data, location }) => {
  const blogTitle = data.site.siteMetadata.title;
  const { description } = data.site.siteMetadata;

  return (
    <Theme>
      <div>
        <Seo title={blogTitle} description={description} />

        <MainHeader location={location.pathname} />

        <main>
          <ContainerContent>
            <Flex
              flexDirection={{ _: 'column', sm: 'row' }}
              flexWrap="wrap"
              justifyContent="space-between"
              mb={{ _: 0, sm: 6}}
            >
              {jsonContent.benefits.map(item => (
                <GridItem
                    key={'benefits' + item.header}
                  cols={jsonContent.benefits.length}
                  linkTo={item.link_to}
                  mb={{ _: 4, sm: 0 }}
                >
                  <Heading align="left" level={2}>
                    {item.header}
                  </Heading>
                  {item.content.map(item => (
                    <Text key={'benefitsCont' + item.slice(0, 5)} fontSize={'medium'} tag="div">{item}</Text>
                ))}
                </GridItem>
              ))}
            </Flex>
            <Heading mb={5} level={2}>
              First steps are simple
            </Heading>
            <div style={{
              backgroundColor: '#eeeeee',
              height: 500+'px',
              width: 100 +'%',
              marginBottom: 75+'px'}}></div>
          </ContainerContent>
          <ContainerSection bg="primaryBrand">
            <ContainerContent pt="3em" pb="3em">
              <Flex flexDirection="column" alignItems="center">
                <Heading textAlign={'center'} fontSize={{ xs: 'h1.sm', sm: 'h1.md', lg: 'h1.lg' }}>
                  {jsonContent.getStartedButtonSectionHeader}
                </Heading>
                <ButtonLink
                    to={'/'}
                  size="large"
                  isPrimary={false}
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
    
  }
`;

// demoImage: file(absolutePath: { regex: "/Demo.png/" }) {
//   childImageSharp {
//     fluid(maxWidth: 1600) {
//     ...GatsbyImageSharpFluid
//     }
//   }
// }
