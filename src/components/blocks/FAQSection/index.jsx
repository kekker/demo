import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Accordion from '../Accordion';
import Pagination from '../Paginator';
import Text from '../../fragments/TextStyles/Text';
import Hr from '../../fragments/TextStyles/Hr';
import truncateStr from '../../../utils/truncateStr';


class FAQSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allQuestions: [],
      currentQuestions: [],
      currentPage: null,
      totalPages: null
    };

    this.ref = React.createRef();
  }

  componentDidMount() {
    const allQuestions = this.props.list;
    this.setState({ allQuestions });
  }

  onPageChanged = data => {
    const { allQuestions } = this.state;
    const { currentPage, totalPages, pageLimit } = data;

    const offset = (currentPage - 1) * pageLimit;
    const currentQuestions = allQuestions.slice(offset, offset + pageLimit);

    this.setState({ currentPage, currentQuestions, totalPages });

    this.ref.current.scrollIntoView({ block: 'end', behavior: 'smooth' });
  };

  render() {
    const {
      allQuestions,
      currentQuestions,
      currentPage,
      totalPages
    } = this.state;
    const totalQuestions = allQuestions.length;

    if (totalQuestions === 0) return null;

    return (
      <div>
        <div
          style={{ position: 'absolute', top: '-150px' }}
          ref={this.ref}
        />
        {currentPage && (
          <Text mt={5} fontSize="12px" tag="div" textTransform="uppercase">
            Page
            {' '}
            <span style={{ fontWeight: 'bold' }}>{currentPage}</span>
            {' '}
            /
            {' '}
            {totalPages}
            &#8195;
            <span style={{ fontWeight: 'bold' }}>{totalQuestions}</span>
            {' '}
            questions and answers
          </Text>
        )}
        <Hr style={{ marginTop: '20px' }} />
        {currentQuestions.map(elem => (
          <Accordion
            title={elem.title}
            preview={elem.content.length >= 210 ? truncateStr(elem.content, 200) : null}
            key={elem.title.substr(0, 20)}
          >
            <Text tag="div" fontSize="medium">
              {elem.content}
            </Text>
            { elem.link && (
              <Text tag="div" fontSize="medium">
                See more at
                {' '}
                <Link to={elem.link.to}>
                  {elem.link.title ? elem.link.title : elem.link.to}
                </Link>
              </Text>
            )}
          </Accordion>
        ))}
        <Pagination
          totalRecords={totalQuestions}
          pageLimit={5}
          pageNeighbours={1}
          onPageChanged={this.onPageChanged}
        />
      </div>
    );
  }
}

FAQSection.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
};

export default FAQSection;
