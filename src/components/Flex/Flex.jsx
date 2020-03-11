import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FlexDiv = styled.div`
  display: flex;
  height: ${props => props.height};
  width: ${props => props.width};

  flex-direction: ${props => props.direction};
  flex-grow: ${props => props.grow};
  flex-shrink: ${props => props.shrink};
  flex-basis: ${props => props.basis};
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  flex-wrap: ${props => props.wrap};

  margin: ${props => props.margin};
`;

const Flex = ({
  children,
  direction,
  grow,
  shrink,
  basis,
  justify,
  align,
  height,
  width,
  margin,
  wrap,
}) => (
  <FlexDiv
    direction={direction}
    grow={grow}
    shrink={shrink}
    basis={basis}
    height={height}
    justify={justify}
    align={align}
    width={width}
    wrap={wrap}
    margin={margin}
  >
    {children}
  </FlexDiv>
);

const FlexGlobalValues = ['inherit', 'initial', 'unset'];

Flex.propTypes = {
  children: PropTypes.node,
  direction: PropTypes.oneOf(
    ['row', 'row-reverse', 'column', 'column-reverse'].concat(FlexGlobalValues),
  ),
  grow: PropTypes.oneOf([PropTypes.number, PropTypes.oneOf(FlexGlobalValues)]),
  shrink: PropTypes.oneOf([
    PropTypes.number,
    PropTypes.oneOf(FlexGlobalValues),
  ]),
  basis: PropTypes.string,
  justify: PropTypes.string,
  align: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  margin: PropTypes.string,
  wrap: PropTypes.string,
};

Flex.defaultValues = {
  direction: 'row',
  grow: 1,
  shrink: 1,
  basis: 'auto',
  justify: 'space-around',
  align: 'flex-start',
  height: '100%',
  width: '100%',
  wrap: 'nowrap',
  margin: 'unset',
};

export default Flex;
