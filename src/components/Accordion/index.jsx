import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';
import { useRect } from '@reach/rect';

import Heading from '../TextStyles/Heading';
import Flex from '../Flex';

import ArrowSvgWhite from '../../../static/assets/kekker_arrow_white.svg';
import Text from '../TextStyles/Text';

const INITIAL_HEIGHT = 100;

const AccordionContent = styled(animated.div)`
  will-change: opacity, height;
  overflow: hidden;
`;

const Preview = styled(animated.button)`
  position: absolute;
  max-width: 650px;
  
  will-change: opacity;
  
  z-index: ${({ isExpanded }) => (isExpanded ? -1 : 1)};
  
  background: transparent;
  text-align: start;
  border: none;
  padding: 0;
`;

const ExpandHeader = styled.button`
    display: block;
    width: 100%;
    padding: 0;
    
    cursor: pointer;
    
    background: transparent;
    border: none;
    text-align: start;
    
    &:hover h3 {
      text-decoration: underline;
    }
    
    &:disabled:hover h3 {
      text-decoration: none;
    }
    
    &:disabled {
      cursor: default;
      color: inherit;
    }
`;

const StyledButtonIcon = styled.img`
    display: inline-block;
    margin-bottom: 0;
    margin-right: 10px;
    height: 25px;
    width: 25px;
    padding: 5px;
    
    background-color: ${({ theme }) => theme.colors.primaryBrand};
    border-radius: 50%;
    
    transform: ${({ isExpanded }) => (isExpanded
    ? 'rotate(-90deg)' : 'rotate(90deg)')};
`;

const AccordionWrapper = styled.div`
  position: relative;
  margin-top: 50px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.bodyLightGrey};
`;


const Accordion = ({ title, preview, children }) => {
  // If we have a preview, the state is "closed" -> false
  // If now preview, set to expanded
  const [isExpanded, setIsExpanded] = useState(false);

  const ref = useRef();
  const rect = useRect(ref);

  const invertedProps = useSpring({ opacity: isExpanded ? 0 : 1, config: { duration: 200 } });
  const [props, set] = useSpring(() => ({ opacity: 0, height: INITIAL_HEIGHT, config: { duration: 200 } }));

  useEffect(() => {
    if (!preview) {
      setIsExpanded(true);
      set({ opacity: 1 });
    }
  });

  const handleExpansion = () => {
    if (preview) {
      setIsExpanded(true);
      set({ height: INITIAL_HEIGHT / 2 + rect.height, opacity: 1 });
    }
  };

  const handleClosure = () => {
    if (preview) {
      setIsExpanded(false);
      set({ height: INITIAL_HEIGHT, opacity: 0 });
    }
  };

  return (
    <AccordionWrapper>
      <ExpandHeader
        disabled={!preview}
        aria-label="Expand Question"
        onClick={isExpanded ? handleClosure : handleExpansion}
      >
        <Flex justifyContent="space-between" alignItems="start">
          <Heading
            maxWidth="550px"
            mb={3}
            display="inline-block"
            level={3}
            fontSize="30px"
            fontWeight="600"
          >
            {title}
          </Heading>
          <StyledButtonIcon
            isExpanded={isExpanded}
            src={ArrowSvgWhite}
            alt=""
          />
        </Flex>
        {preview && (
          <Preview
            isExpanded={isExpanded}
            aria-label="Expand Preview Question"
            onClick={isExpanded ? handleClosure : handleExpansion}
            style={invertedProps}
          >
            <Text>
              {preview}
              {' '}
            </Text>
            <Text tag="span" fontWeight={600}>
              read more
            </Text>
          </Preview>
        )}
      </ExpandHeader>

      <AccordionContent
        style={props}
      >
        <animated.div style={{ position: 'absolute', maxWidth: '650px' }} ref={ref}>{children}</animated.div>
      </AccordionContent>

    </AccordionWrapper>
  );
};

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Accordion;
