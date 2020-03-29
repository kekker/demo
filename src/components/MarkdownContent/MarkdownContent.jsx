import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

const MarkdownSection = styled.section`
  max-width: 85%;

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
    console.log(flattenedSectionItems, templateTitle);
    return flattenedSectionItems.find(item =>
        item.title.toLowerCase() === templateTitle.toLowerCase());
};

const MarkdownContent = ({ markdownRemark, listItems }) => {
    const { next, prev } = markdownRemark.frontmatter;
    const prevPage = getPageByTitle(listItems, prev);
    const nextPage = getPageByTitle(listItems, next);
    console.log(prevPage);
    console.log(nextPage);

    return (
        <MarkdownSection>
            <div dangerouslySetInnerHTML={{__html: markdownRemark.html}}/>
            <ul>
                <li className="post-navigation">
                    {prevPage && (
                        <Link to={prevPage.to} rel="prev">
                            ←
                            {' '}
                            {prevPage.title}
                        </Link>
                    )}
                </li>
                <li className="post-navigation">
                    {nextPage && (
                        <Link to={nextPage.to} rel="next">
                            {nextPage.title}
                            {' '}
                            →
                        </Link>
                    )}
                </li>
            </ul>
        </MarkdownSection>
    );
};

MarkdownContent.propTypes = {
  markdownRemark: PropTypes.object.isRequired,
  previous: PropTypes.node,
  next: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default MarkdownContent;
