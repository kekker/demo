import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { MDXRenderer } from 'gatsby-plugin-mdx';
import MarkdownFooter from '../MarkdownFooter';
import Flex from '../../fragments/Flex';


const MarkdownSection = styled.section`
  height: 100%;
  max-width: 650px;

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    max-width: 100%;
  }
`;

const MarkdownRawContent = styled.div`
  margin-bottom: ${({ theme }) => theme.space[6]}px;
`;

const getPageByTitle = (sectionList, templateTitle) => {
  if (!templateTitle) {
    return null;
  }
  const sectionItems = sectionList.map(section => section.items);
  const flattenedSectionItems = [].concat.apply([], sectionItems);
  return flattenedSectionItems.find(
    item => item.title.toLowerCase() === templateTitle.toLowerCase(),
  );
};

const RenderRawContent = ({
  contentType, content, frontmatter, listItems
}) => {
  const {
    next, prev, prev_title, next_title
  } = frontmatter;
  const prevPage = getPageByTitle(listItems, prev);
  const nextPage = getPageByTitle(listItems, next);

  const contentNode = type => {
    switch (type) {
      case 'markdown':
        return (
          <MarkdownRawContent dangerouslySetInnerHTML={{ __html: content }} />
        );
      case 'mdx':
        return (
          <MDXRenderer>{content}</MDXRenderer>
        );
      default:
        return null;
    }
  };

  return (
    <MarkdownSection>
      <Flex
        height="100%"
        flexDirection="column"
        justifyContent="space-between"
      >
        { contentNode(contentType)}
        <div>
          <MarkdownFooter
            next_title={next_title}
            prev_title={prev_title}
            prev={prevPage}
            next={nextPage}
          />
        </div>
      </Flex>
    </MarkdownSection>
  );
};

RenderRawContent.propTypes = {
  contentType: PropTypes.string,
  content: PropTypes.string.isRequired,
  frontmatter: PropTypes.object.isRequired,
  listItems: PropTypes.array.isRequired,
};

RenderRawContent.defaultProps = {
  contentType: 'markdown'
};

export default RenderRawContent;
