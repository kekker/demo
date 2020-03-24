import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';

// Components
import ContainerContent from '../components/ContainerContent';
import ButtonLink from '../components/Button';
import Layout from '../components/Layout';
import SideMenu from "../components/Menu/SideMenu";


const DocsList = ({ data, location }) => {

    return (
        <Layout location={location.pathname} title="Kekker Invitation" description="Kekker Invitation">
            <div className="blog-container">
                <ContainerContent pl="0" pr="2em">
                    <InvintationForm />
                </ContainerContent>

                <aside>
                    <SideMenu location={location.pathname} />
                </aside>
            </div>
        </Layout>
    );
};

DocsList.propTypes = {
    data: PropTypes.node,
    location: PropTypes.string,
};

export default DocsList;
