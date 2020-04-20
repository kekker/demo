import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import MarkdownFooter from '../MarkdownFooter';
import Flex from '../Flex';
import SandboxPromoSection from "../SandboxPromoSection";

const MarkdownSection = styled.section`
  height: 100%;

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    max-width: 100%;
  }
`;

const MarkdownRawContent = styled.div`
  margin-bottom: ${({theme}) => theme.space[6]}px;
  
  & > p:last-child {
    margin-bottom: 0;
  }
  
  & > ol > li:last-child {
    margin-bottom: 0;
  }
  
  & > ol:last-child {
    margin-bottom: 0;
  }
  
  & > ul > li:last-child {
    margin-bottom: 0;
  }
  
  & > ul:last-child {
    margin-bottom: 0;
  }
  
  & > blockquote:last-child {
    margin-bottom: 0;
  }
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

const MarkdownContent = ({ markdownRemark, listItems }) => {
  const { next, prev, prev_title, next_title } = markdownRemark.frontmatter;
  const prevPage = getPageByTitle(listItems, prev);
  const nextPage = getPageByTitle(listItems, next);

  return (
    <MarkdownSection>
      <Flex
        height="100%"
        flexDirection="column"
        justifyContent="space-between"
      >
        <MarkdownRawContent dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
        <div>
          <SandboxPromoSection/>
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

MarkdownContent.propTypes = {
  markdownRemark: PropTypes.object.isRequired,
  listItems: PropTypes.array.isRequired,
};

export default MarkdownContent;
