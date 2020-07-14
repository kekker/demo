import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';

import Rect from '@reach/rect';
import Heading from '../../fragments/TextStyles/Heading';
import Flex from '../../fragments/Flex';

import ArrowSvgWhite from '../../../../static/assets/kekker_arrow_white.svg';
import Text from '../../fragments/TextStyles/Text';


const AccordionContent = styled(animated.div)`
  will-change: opacity, height;
  overflow: hidden;
`;

const Preview = styled(animated.button)`
  max-width: 650px;
  
  will-change: opacity;
  
  z-index: ${({ isexpanded }) => (isexpanded === 'true' ? -1 : 1)};
  
  background: transparent;
  text-align: start;
  border: none;
  padding: 0;
`;

const ExpandHeader = styled.div`
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
  padding-bottom: 50px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.bodyLightGrey};
`;


const AccordionInner = ({ isExpanded, children }) => {
  const { opacity } = useSpring({ opacity: isExpanded ? 1 : 0 });

  return (
    <AccordionContent style={{ opacity }}>
      <animated.div style={{ maxWidth: '650px' }}>{children}</animated.div>
    </AccordionContent>
  );
};


AccordionInner.propTypes = {
  children: PropTypes.node,
  isExpanded: PropTypes.bool
};

const Accordion = ({ title, preview, children }) => {
  // If we have a preview, the state is "closed" -> false
  // If now preview, set to expanded
  const [isExpanded, setIsExpanded] = useState(false);
  const props = useSpring({ opacity: isExpanded ? 0 : 1 });

  const handleExpansion = () => {
    if (preview) {
      setIsExpanded(true);
    }
  };

  const handleClosure = () => {
    if (preview) {
      setIsExpanded(false);
    }
  };

  if (!preview) {
    return (
      <AccordionWrapper>
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
        </Flex>
        <AccordionContent
          isExpanded
        >
          <div style={{ maxWidth: '650px' }}>{children}</div>
        </AccordionContent>
      </AccordionWrapper>
    );
  }

  return (
    <AccordionWrapper>
      <ExpandHeader
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
      </ExpandHeader>

      <Rect>
        {({ rect, ref }) => (
          <div style={{
            position: 'relative',
          }}
          >

            <div style={{ position: 'absolute' }} ref={ref}>
              <AccordionInner
                isExpanded={isExpanded}
              >
                {children}
              </AccordionInner>
            </div>

            <Rect>
              { measures => (
                <AccordionContent style={props}>
                  <Preview
                    ref={measures.ref}
                    isexpanded={isExpanded.toString()}
                    aria-label="Expand Preview Question"
                    onClick={isExpanded ? handleClosure : handleExpansion}
                  >
                    <Text>
                      {preview}
                      {' '}
                    </Text>
                    <Text tag="span" fontWeight={600}>
                      read more
                    </Text>
                  </Preview>

                  <div style={{
                    transition: 'all 340ms',
                    height: isExpanded && rect && measures && rect.height
                      ? rect.height - measures.rect.height : 0
                  }}
                  />
                </AccordionContent>
              )}
            </Rect>

          </div>
        )}
      </Rect>

    </AccordionWrapper>
  );
};

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  preview: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.any
  ]),
  children: PropTypes.node.isRequired
};

export default Accordion;
