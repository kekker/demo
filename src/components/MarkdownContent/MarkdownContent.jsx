import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import Heading from '../TextStyles/Heading';
import Text from '../TextStyles/Text';

const TitleDiv = styled.div`
  margin-bottom: 1.4em;
`;

const MarkdownSection = styled.section`
    max-width: 70%;
    
    @media (max-width: ${props => props.theme.breakpoints.sm}) {
        max-width: 100%;
    }
`;

const MarkdownContent = ({
  markdownRemark,
  title,
  description,
  previous,
  next,
}) => (
  <MarkdownSection>

    <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
    {/*<ul>*/}
    {/*  <li className="post-navigation">*/}
    {/*    {previous && (*/}
    {/*      <Link to={previous.fields.slug} rel="prev">*/}
    {/*        ←*/}
    {/*        {' '}*/}
    {/*        {previous.frontmatter.title}*/}
    {/*      </Link>*/}
    {/*    )}*/}
    {/*  </li>*/}
    {/*  <li className="post-navigation">*/}
    {/*    {next && (*/}
    {/*      <Link to={next.fields.slug} rel="next">*/}
    {/*        {next.frontmatter.title}*/}
    {/*        {' '}*/}
    {/*        →*/}
    {/*      </Link>*/}
    {/*    )}*/}
    {/*  </li>*/}
    {/*</ul>*/}
  </MarkdownSection>
);

MarkdownContent.propTypes = {
  markdownRemark: PropTypes.node.isRequired,
  previous: PropTypes.node,
  next: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default MarkdownContent;
