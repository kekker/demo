import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import Heading from '../Text/Heading';
import Text from '../Text/Text';

const TitleDiv = styled.div`
  margin-bottom: 1.4em;
`;

const MarkdownContent = ({
  markdownRemark,
  title,
  description,
  previous,
  next,
}) => (
  <section className="posts">
    <TitleDiv>
      <Heading>{title}</Heading>
      <Text size="medium">{description}</Text>
    </TitleDiv>

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
  title: PropTypes.string,
  description: PropTypes.string,
};

export default MarkdownContent;
