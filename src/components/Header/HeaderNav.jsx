import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import HeaderLink from './HeaderLink';
import ButtonLink from '../Button';
import Flex from '../Flex';

import navHeader from '../../../content/navHeader.yml';
import LogoLink from '../Logo';
import { Bars, Close } from '../Icons/Icons';
import ContainerContent from '../ContainerContent';
import ContainerSection from '../ContainerSection';
import footerNav from '../../../content/footerNav.yml';
import FooterLink from '../Footer/FooterLink';

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
  
  @media (max-width: 700px) {
    display: none;
  }
`;

const BurgerLinkWrapper = styled(Flex)`
  display: none;
  
  @media (max-width: 700px) {
    display: flex;
    margin-right: 20px;
  }
`;

const StyledBurgerButton = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
  
  color: ${({ theme }) => theme.colors.invertedText};
  font-size: 20px;
  line-height: 18px;
`;

const StyledDropdownSection = styled.div`
  max-height: ${({ isExpanded }) => (isExpanded ? '1000px' : 0)};
  position: absolute;
  left: -30px;
  right: -30px;
  
  -moz-transition: max-height .5s;
  -ms-transition: max-height .5s;
  -o-transition: max-height .5s;
  -webkit-transition: max-height .5s;
  transition: max-height .5s;
  overflow: hidden;
  
  @media (min-width: 600px) {
    left: -75px;
    right: -75px;
  }
  
  @media (min-width: 700px) {
    display: none;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  margin-bottom: 30px;
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
    this.setState({ isExpanded: !this.state.isExpanded });
  };

  render() {
    const { theme, location } = this.props;
    const { isExpanded } = this.state;

    const DropDownMenu = (
      <StyledDropdownSection isExpanded={isExpanded}>
        <ContainerSection bg="#000000">
          <ContainerContent pt={3} pb={{ _: 4, sm: 6 }}>
            <Flex flexDirection="column" height="100%">
              <Grid>
                {footerNav.items.map(linkSection => (
                  <FooterLink
                    key={`headerSection${linkSection.header}`}
                    footerColumn={linkSection}
                    count={footerNav.items.length}
                    fontSize="medium"
                  />
                ))}
              </Grid>
            </Flex>
          </ContainerContent>
        </ContainerSection>
      </StyledDropdownSection>
    );

    return (
      <div style={{
        position: 'relative', width: '100%', margin: 0, padding: 0
      }}
      >
        <Flex
          height={theme.layout.menuHeight}
          width="100%"
          justifyContent="space-between"
          alignItems="center"
        >

          <Flex height="100%">
            <BurgerLinkWrapper width="30px" height="100%" alignItems="center">
              <StyledBurgerButton onClick={this.handleExpansion}>
                { isExpanded ? <Close /> : <Bars />}
              </StyledBurgerButton>
            </BurgerLinkWrapper>

            <Flex
              flexBasis="200px"
              height="100%"
              alignItems="center"
              mr={3}
            >
              <LogoLink />
            </Flex>
          </Flex>

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
            isShrinking
            to="/docs/getting-started/get-started.html"
            title="Get Started"
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
