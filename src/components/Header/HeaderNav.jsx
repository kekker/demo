import React from 'react';
import PropTypes from 'prop-types';
import styled, {withTheme} from 'styled-components';
import HeaderLink from './HeaderLink';
import ButtonLink from '../Button';
import Flex from '../Flex';

import navHeader from '../../../content/navHeader.yml';
import LogoLink from '../Logo';
import {Bars} from "../Icons/Icons";
import ContainerContent from "../ContainerContent";
import ContainerSection from "../ContainerSection";
import Text from "../TextStyles/Text";

const Nav = styled.nav`
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: flex-end;
  flex-grow: 1;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  height: 100%;
  margin-right: 1em;

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar: {
    display: 'none';
  }
`;

const LogoLinkWrapper = styled(Flex)`
  @media (max-width: 700px) {
    display: none;
  }
`;

const BurgerLinkWrapper = styled(Flex)`
  display: none;
  
  @media (max-width: 700px) {
    display: flex;
  }
`;

const StyledBurgerButton = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
  
  color: ${({theme}) => theme.colors.invertedText};
  font-size: 24px;
  line-height: 20px;
`;

const StyledDropdownSection = styled.div`
  height: ${({isExpanded}) => isExpanded ? '300px' : 0};
  position: absolute;
  left: -30px;
  
  -moz-transition: height .5s;
  -ms-transition: height .5s;
  -o-transition: height .5s;
  -webkit-transition: height .5s;
  transition: height .5s;
  overflow: hidden;
  
  @media (min-width: 600px) {
    left: -75px;
  }
  
  @media (min-width: 700px) {
    display: none;
  }
`;

class HeaderNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isExpanded: false
    };

    this.handleExpansion = this.handleExpansion.bind(this);
  }

  handleExpansion = () => {
    this.setState({ isExpanded: !this.state.isExpanded})
  };

  render() {
    const { theme, location } = this.props;
    const { isExpanded } = this.state;

    const DropDownMenu = (
        <StyledDropdownSection isExpanded={isExpanded}>
          <ContainerSection bg={'#000000'}>
            <ContainerContent>
              <Text color={'#FFFFFF'}>
                Menu will be here soon!
              </Text>
            </ContainerContent>
          </ContainerSection>
        </StyledDropdownSection>
    );

    return (
      <div style={{position: 'relative', width: '100%', margin: 0, padding: 0}}>
        <Flex
            height={theme.layout.menuHeight}
            width="100%"
            justifyContent="space-between"
            alignItems="center"
        >
          <LogoLinkWrapper flexBasis="200px" height='100%' alignItems='center'>
            <LogoLink/>
          </LogoLinkWrapper>

          <BurgerLinkWrapper height='100%' alignItems='center'>
            <StyledBurgerButton onClick={this.handleExpansion}>
              <Bars/>
            </StyledBurgerButton>
          </BurgerLinkWrapper>

          <Nav>
            {navHeader.items.map(link => (
                <HeaderLink
                    key={link.title}
                    isActive={location.includes(link.activeSelector)}
                    title={link.title}
                    to={link.to}
                />
            ))}
          </Nav>
          <ButtonLink
              size="small"
              fontSize="medium"
              isPrimary
              to="/invitation"
              title="Sandbox Access"
          />
        </Flex>
        {DropDownMenu}
      </div>
    );
  }
}


export default withTheme(HeaderNav);

HeaderNav.propTypes = {
  location: PropTypes.string.isRequired,
};
