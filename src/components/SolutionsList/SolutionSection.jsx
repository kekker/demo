import React from "react";

import Text from "../TextStyles/Text";
import styled from "styled-components";
import Button from "../Button/Button";
import { AngleDown, AngleUp } from "../Icons/Icons";
import Heading from "../TextStyles/Heading";

const StyledSolutionList = styled.ul`
  position: relative;
  list-style: none;
  margin: ${({theme}) => theme.space[3]}px 0;
  
  height: calc(${props => props.itemsShown} * 80px);
  
  -moz-transition: height .5s;
  -ms-transition: height .5s;
  -o-transition: height .5s;
  -webkit-transition: height .5s;
  transition: height .5s;
  overflow: hidden;
`;

const StyledSolutionItem = styled.li`
  border-bottom: 1px solid hsla(0,0%,0%,0.1);
  margin: 0;
  height: 80px;
  padding-bottom: ${({theme}) => theme.space[2]}px;
  padding-top: ${({theme}) => theme.space[2]}px;
  
  &:last-child {
    border-bottom: none;
  }
`;

const StyledLink = styled.a`
    color: ${({theme}) => theme.colors.primaryText};
    text-decoration: none;
    
    &:hover {
        text-decoration: underline;
    }
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
        if (this.state.isExpanded === true &&
            this.ref &&
            this.props.items.length > 6
        ) {
            this.ref.current.scrollIntoView({
                block: 'start',
                behavior: "smooth"
            })
        }
        this.setState({ isExpanded: !this.state.isExpanded });
    };

    render() {
        const { isExpanded } = this.state;
        const { title, items } = this.props;
        const firstToShowItems = items.length >= 3 ? items.slice(0, 3) : items;
        const remainingItems = items.length > 3 ? items.slice(3) : null;
        const itemsCount = isExpanded && remainingItems
            ? remainingItems.length + firstToShowItems.length
            : firstToShowItems.length;

        return (
            <>
                <Heading level={2}>{title}</Heading>
                <StyledSolutionList
                    itemsShown={itemsCount}
                    isExpanded={isExpanded}>
                    <div id={title}
                         style={{position: 'absolute', top: '-150px'}}
                         ref={this.ref}/>
                    { items.map(item =>
                        <StyledSolutionItem>
                            <StyledLink href={item.link} target='_blank'>
                                <Text tag='div' fontSize='medium+' fontWeight={600}>
                                    {item.title}
                                </Text>
                            </StyledLink>
                            <Text tag='div' fontSize='medium'>
                                {item.specification}
                            </Text>
                        </StyledSolutionItem>
                    )}
                </StyledSolutionList>
                <Button
                    disabled={false}
                    title={isExpanded ? "Show Less" : "Show More"}
                    onClick={this.handleExpansion}
                    icon={isExpanded ? <AngleUp /> : <AngleDown />}
                />
            </>
        )
    }
}

export default SolutionSection;
