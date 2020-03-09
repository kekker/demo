import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

// Components
import Layout from '../components/Layout/Layout';
import Seo from '../components/SEO/Seo';

// Utils
import shorten from '../utils/truncateStr';
import ButtonLink from '../components/Button';

const BlogIndex = ({ data }) => {
  const blogTitle = data.site.siteMetadata.title;
  const authorName = data.site.siteMetadata.author;
  const posts = data.allMarkdownRemark.edges;
  const { bio } = data.site.siteMetadata;
  const profilePic = data.profilePic.childImageSharp.fluid;

  return (
    <Layout title={blogTitle} subtitle="Kekker Documentation">
      <Seo title="All articles" />
      <div className="blog-container">
        <section>
          {posts.map(post => (
            <div className="post-summary" key={`summary-${post.title}`}>
              <p>{post.node.frontmatter.date}</p>
              <h2>{post.node.frontmatter.title}</h2>
              <div
                className="content"
                dangerouslySetInnerHTML={{
                  __html: shorten(post.node.html, 300),
                }}
              />
              <ButtonLink to={post.node.fields.slug} title="Read More" />
            </div>
          ))}
        </section>
        <aside>
          <Img fluid={profilePic} alt={`Author ${authorName}`} />
          <h3>{authorName}</h3>
          <p>{bio}</p>
        </aside>
      </div>
    </Layout>
  );
};

BlogIndex.propTypes = {
  data: PropTypes.node,
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author
        bio
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          html
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
    profilePic: file(absolutePath: { regex: "/kekker.jpg/" }) {
      childImageSharp {
        fluid(maxHeight: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
