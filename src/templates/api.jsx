import styled from "styled-components";
import PropTypes from "prop-types";
import React from "react";

import Theme from "../components/Theme";
import Seo from "../components/SEO";
import ShortHeader from "../components/Header/Header";
import ContainerContent from "../components/ContainerContent/ContainerContent";
import SideMenu from "../components/Menu/SideMenu";
import Footer from "../components/Footer";

const GridApiLayout = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-gap: 2em;
    
     @media (max-width: ${props => props.theme.breakpoints.sm}) {
        display: block;
    }
`;

const GridApiAll = styled.div`
    grid-column: 1 / 3;
`;

const GridApiMenu = styled.div`
    margin-bottom: ${props => props.theme.space[6]}px;
    margin-top: ${props => props.theme.space[5]}px;
    white-space: nowrap;
    
    @media (min-height: 300px) {
        position: sticky;
        top: ${props => props.theme.space[6]}px;;
    }
    
     @media (max-width: ${props => props.theme.breakpoints.sm}) {
        display: none;
    }
`;

const ApiLayout = ({
                    children, location, title, description
                }) => (
    <Theme>
        <Seo title={title} description={description} />
        <ShortHeader location={location} />

        <main>
            <ContainerContent mt={0} pt={0} pl={{ _: 4, sm: 6, md: 6}} >
                <GridApiLayout>
                    <div style={{paddingTop: '25px'}}>
                        {children}
                    </div>
                    <aside>
                        <GridApiMenu>
                            <SideMenu location={location} />
                        </GridApiMenu>
                    </aside>
                </GridApiLayout>
            </ContainerContent>
        </main>


        <Footer />
    </Theme>
);

ApiLayout.propTypes = {
    location: PropTypes.string,
    children: PropTypes.node,
    title: PropTypes.string,
    description: PropTypes.string,
};

ApiLayout.defaultProps = {
    description: '',
};

export default ApiLayout;
