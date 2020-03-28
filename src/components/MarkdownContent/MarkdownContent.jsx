import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MarkdownSection = styled.section`
  max-width: 85%;

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    max-width: 100%;
  }
`;

const MarkdownContent = ({ markdownRemark }) => (
  <MarkdownSection>
    <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
    {/* <ul> */}
    {/*  <li className="post-navigation"> */}
    {/*    {previous && ( */}
    {/*      <Link to={previous.fields.slug} rel="prev"> */}
    {/*        ← */}
    {/*        {' '} */}
    {/*        {previous.frontmatter.title} */}
    {/*      </Link> */}
    {/*    )} */}
    {/*  </li> */}
    {/*  <li className="post-navigation"> */}
    {/*    {next && ( */}
    {/*      <Link to={next.fields.slug} rel="next"> */}
    {/*        {next.frontmatter.title} */}
    {/*        {' '} */}
    {/*        → */}
    {/*      </Link> */}
    {/*    )} */}
    {/*  </li> */}
    {/* </ul> */}
  </MarkdownSection>
);

MarkdownContent.propTypes = {
  markdownRemark: PropTypes.object.isRequired,
  previous: PropTypes.node,
  next: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default MarkdownContent;
