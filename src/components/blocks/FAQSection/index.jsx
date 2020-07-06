import React from 'react';
import PropTypes from 'prop-types';

import Accordion from '../../Accordion';
import Pagination from '../../Paginator';
import Text from '../../TextStyles/Text';
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
          <span className="current-page d-inline-block h-100 pl-4 text-secondary">
                  Page <span className="font-weight-bold">{currentPage}</span> /{" "}
            <span className="font-weight-bold">{totalPages}</span>
                </span>
        )}
        {currentQuestions.map(elem => (
          <Accordion
            title={elem.title}
            preview={truncateStr(elem.content, 150)}
            key={elem.title.substr(0, 20)}
          >
            <Text tag="div" fontSize="medium">
              {elem.content}
            </Text>
          </Accordion>
        ))}
        <Pagination
          totalRecords={totalQuestions}
          pageLimit={3}
          pageNeighbours={0}
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
