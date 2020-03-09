import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';

const MarkdownContent = ({ markdownRemark, previous, next }) => (
  <section className="posts">
    <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
    <ul>
      <li className="post-navigation">
        {previous && (
          <Link to={previous.fields.slug} rel="prev">
            ←
            {' '}
            {previous.frontmatter.title}
          </Link>
        )}
      </li>
      <li className="post-navigation">
        {next && (
          <Link to={next.fields.slug} rel="next">
            {next.frontmatter.title}
            {' '}
            →
          </Link>
        )}
      </li>
    </ul>
  </section>
);

MarkdownContent.propTypes = {
  markdownRemark: PropTypes.node.isRequired,
  previous: PropTypes.node,
  next: PropTypes.node,
};

export default MarkdownContent;
