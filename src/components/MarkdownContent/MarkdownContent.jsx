import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import MarkdownFooter from "../MarkdownFooter";

const MarkdownSection = styled.section`
  max-width: 90%;

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    max-width: 100%;
  }
`;

const getPageByTitle = (sectionList, templateTitle) => {
    if (!templateTitle) {
        return null;
    }
    const sectionItems = sectionList.map(section => section.items);
    const flattenedSectionItems = [].concat.apply([], sectionItems);
    return flattenedSectionItems.find(item =>
        item.title.toLowerCase() === templateTitle.toLowerCase());
};

const MarkdownContent = ({ markdownRemark, listItems }) => {
    const { next, prev } = markdownRemark.frontmatter;
    const prevPage = getPageByTitle(listItems, prev);
    const nextPage = getPageByTitle(listItems, next);

    return (
        <MarkdownSection>
            <div dangerouslySetInnerHTML={{__html: markdownRemark.html}}/>
            <MarkdownFooter prev={prevPage} next={nextPage} />
        </MarkdownSection>
    );
};

MarkdownContent.propTypes = {
  markdownRemark: PropTypes.object.isRequired,
  listItems: PropTypes.array.isRequired
};

export default MarkdownContent;
