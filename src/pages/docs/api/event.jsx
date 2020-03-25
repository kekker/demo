import React from 'react';
import PropTypes from 'prop-types';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css'

// Components
import ApiLayout from "../../../templates/api";
const swaggerContent = require('../../../../static/kekkerdemo-event');

const EventPage = ({ location }) => {

    return (
        <ApiLayout location={location.pathname} title="Api Page" description="Api Page">
            <SwaggerUI docExpansion='list' spec={swaggerContent}/>
        </ApiLayout>
    );
};

EventPage.propTypes = {
    location: PropTypes.object,
};

export default EventPage;
