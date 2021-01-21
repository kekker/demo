import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import prevArrowWide from '../../../../static/assets/kekker_arrow.svg';
import Text from '../../fragments/TextStyles/Text';

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

/**
 * Helper method for creating a range of numbers
 * range(1, 5) => [1, 2, 3, 4, 5]
 */
const range = (from, to, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};

const PaginationWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  
  margin: 50px 0 0 0;
`;

const PageItem = styled.li`  
  margin-bottom: 0;
  
  &::before {
    display: none;
  }
`;

const PageLink = styled.button`
  height: 100%;
  
  background: transparent;
  border: none;
  
  font-size: 18px;
  
  font-weight: ${({ isActive }) => (isActive ? 600 : 300)};
  
  &:hover {
    text-decoration: underline;
  }
`;

const StyledPageControl = styled.button`
  height: 100%;
  display: flex;
  align-items: center;
  
  background: transparent;
  border: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const NextImg = styled.img`
  height: 14px;
  margin-top: 2px;
  margin-bottom: 0;
  margin-left: 10px;
`;

const PrevImg = styled.img`
  height: 14px;
  margin-bottom: 2px;
  margin-right: 10px;

  transform: scale(-1, 1);
`;


const PageControl = ({ type, onClick }) => {
  if (type === 'prev') {
    return (
      <StyledPageControl style={{ marginRight: '40px' }} onClick={onClick}>
        <PrevImg src={prevArrowWide} />
        <Text
          fontSize="18px"
          textTransform="uppercase"
          fontWeight="800"
          tag="div"
        >
          Previous&nbsp;Page
        </Text>
      </StyledPageControl>
    );
  }

  if (type === 'next') {
    return (
      <PageLink style={{ marginLeft: '40px' }} onClick={onClick}>
        <Text
          fontSize="18px"
          textTransform="uppercase"
          fontWeight="800"
          tag="span"
        >
          Next&nbsp;Page
        </Text>
        <NextImg src={prevArrowWide} />
      </PageLink>
    );
  }

  return null;
};

PageControl.propTypes = {
  type: PropTypes.oneOf(['prev', 'next']),
  onClick: PropTypes.func
};


class Pagination extends Component {
  constructor(props) {
    super(props);
    const { totalRecords = null, pageLimit = 30, pageNeighbours = 0 } = props;

    this.pageLimit = typeof pageLimit === 'number' ? pageLimit : 30;
    this.totalRecords = typeof totalRecords === 'number' ? totalRecords : 0;

    this.pageNeighbours = typeof pageNeighbours === 'number'
      ? Math.max(0, Math.min(pageNeighbours, 2))
      : 0;

    this.totalPages = Math.ceil(this.totalRecords / this.pageLimit);

    this.state = { currentPage: 1 };
  }

  componentDidMount() {
    this.gotoPage(1);
  }

  gotoPage = page => {
    const { onPageChanged = f => f } = this.props;

    const currentPage = Math.max(1, Math.min(page, this.totalPages));

    const paginationData = {
      currentPage,
      totalPages: this.totalPages,
      pageLimit: this.pageLimit,
      totalRecords: this.totalRecords
    };

    this.setState({ currentPage }, () => onPageChanged(paginationData));
  };

  handleClick = (page, evt) => {
    evt.preventDefault();
    this.gotoPage(page);
  };

  handleMoveLeft = evt => {
    evt.preventDefault();
    this.gotoPage(this.state.currentPage - this.pageNeighbours * 2 - 1);
  };

  handleMoveRight = evt => {
    evt.preventDefault();
    this.gotoPage(this.state.currentPage + this.pageNeighbours * 2 + 1);
  };

  fetchPageNumbers = () => {
    const { totalPages } = this;
    const { currentPage } = this.state;
    const { pageNeighbours } = this;

    const totalNumbers = this.pageNeighbours * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      let pages = [];

      const leftBound = currentPage - pageNeighbours;
      const rightBound = currentPage + pageNeighbours;
      const beforeLastPage = totalPages - 1;

      const startPage = leftBound > 2 ? leftBound : 2;
      const endPage = rightBound < beforeLastPage ? rightBound : beforeLastPage;

      pages = range(startPage, endPage);

      const pagesCount = pages.length;
      const singleSpillOffset = totalNumbers - pagesCount - 1;

      const leftSpill = startPage > 2;
      const rightSpill = endPage < beforeLastPage;

      const leftSpillPage = LEFT_PAGE;
      const rightSpillPage = RIGHT_PAGE;

      if (leftSpill && !rightSpill) {
        const extraPages = range(startPage - singleSpillOffset, startPage - 1);
        pages = [leftSpillPage, ...extraPages, ...pages];
      } else if (!leftSpill && rightSpill) {
        const extraPages = range(endPage + 1, endPage + singleSpillOffset);
        pages = [...pages, ...extraPages, rightSpillPage];
      } else if (leftSpill && rightSpill) {
        pages = [leftSpillPage, ...pages, rightSpillPage];
      }

      return [1, ...pages, totalPages];
    }

    return range(1, totalPages);
  };

  render() {
    if (!this.totalRecords) return null;

    if (this.totalPages === 1) return null;

    const { currentPage } = this.state;
    const pages = this.fetchPageNumbers();

    return (
      <>
        <nav aria-label="Question Pagination">
          <PaginationWrapper>
            { currentPage !== 1 && (
              <PageControl onClick={this.handleMoveLeft} type="prev" />
            )}
            {pages.map((page) => {
              if (page === LEFT_PAGE || page === RIGHT_PAGE) {
                return (
                  <PageItem style={{ paddingTop: '3px' }} key={`PageItem${page}`}>
                    <span aria-hidden="true">&#8230;</span>
                  </PageItem>
                );
              }

              return (
                <PageItem
                  key={`PageItem${page}`}
                >
                  <PageLink
                    href="#"
                    isActive={currentPage === page}
                    onClick={e => this.handleClick(page, e)}
                  >
                    {page}
                  </PageLink>
                </PageItem>
              );
            })}
            { currentPage !== this.totalPages && (
              <PageControl onClick={this.handleMoveRight} type="next" />
            )}
          </PaginationWrapper>
        </nav>
      </>
    );
  }
}

Pagination.propTypes = {
  totalRecords: PropTypes.number.isRequired,
  pageLimit: PropTypes.number,
  pageNeighbours: PropTypes.number,
  onPageChanged: PropTypes.func
};

export default Pagination;
