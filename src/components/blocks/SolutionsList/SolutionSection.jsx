import React from 'react';

import styled from 'styled-components';
import Text from '../../fragments/TextStyles/Text';
import Heading from '../../fragments/TextStyles/Heading';
import Flex from '../../fragments/Flex';

import ArrowSvgWhite from '../../../../static/assets/kekker_arrow_white.svg';


const StyledSolutionList = styled.ul`
  position: relative;
  list-style: none;
  margin: 0;
  
  height: ${({ isExpanded, itemsShown }) => (isExpanded
    ? `calc(${itemsShown}* 80px)`
    : '0')
}; 
  
  transition: height .5s;
  overflow: hidden;
`;

const StyledSolutionItem = styled.li`
  border-bottom: 1px solid hsla(0,0%,0%,0.1);
  margin: 0;
  height: 80px;
  padding-bottom: ${({ theme }) => theme.space[2]}px;
  padding-top: ${({ theme }) => theme.space[2]}px;
  
  &:last-child {
    border-bottom: none;
  }
`;

const StyledLink = styled.a`
    color: ${({ theme }) => theme.colors.primaryText};
    text-decoration: none;
    
    &:hover {
        text-decoration: underline;
    }
`;

const ExpandHeader = styled.button`
    display: block;
    height: 4em;
    width: 100%;
    padding: 0;
    
    background: transparent;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    text-align: start;
    
    &:last-of-type {
        border: none;
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


class SolutionSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isExpanded: false
    };

    this.ref = React.createRef();

    this.handleExpansion = this.handleExpansion.bind(this);
  }

    handleExpansion = e => {
      this.setState({ isExpanded: !this.state.isExpanded });
    };

    render() {
      const { isExpanded } = this.state;
      const { title, items } = this.props;

      const itemsLength = items.length;

      return (
        <>
          <ExpandHeader onClick={this.handleExpansion}>
            <Flex alignItems="center">
              <StyledButtonIcon
                isExpanded={isExpanded}
                src={ArrowSvgWhite}
                alt=""
              />
              <Heading
                mb={0}
                display="inline-block"
                level={3}
                fontSize="22px"
                fontWeight="600"
              >
                {title}
              </Heading>
            </Flex>
          </ExpandHeader>
          <StyledSolutionList
            itemsShown={itemsLength}
            isExpanded={isExpanded}
          >
            <div
              id={title}
              style={{ position: 'absolute', top: '-150px' }}
              ref={this.ref}
            />
            { items.map(item => (
              <StyledSolutionItem key={item.title}>
                <StyledLink href={item.link} target="_blank">
                  <Text tag="div" fontSize="medium+" fontWeight={600}>
                    {item.title}
                  </Text>
                </StyledLink>
                <Text tag="div" fontSize="medium">
                  {item.specification}
                </Text>
              </StyledSolutionItem>
            )
            )}
          </StyledSolutionList>
        </>
      );
    }
}

export default SolutionSection;
