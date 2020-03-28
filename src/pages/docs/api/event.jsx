import React from 'react';
import PropTypes from 'prop-types';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css'

// Components
import ApiLayout from "../../../templates/api";
const swaggerContent = require('../../../../static/kekkerdemo-event');


class EventPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            swaggerComponent: ''
        }
    }

    componentDidMount() {
        if (window) {
            this.setState({
                swaggerComponent: <SwaggerUI docExpansion='list' spec={swaggerContent}/>
            })
        }
    }

    render() {
        return (
            <ApiLayout location={this.props.location.pathname} title="Api Page" description="Api Page">
                {this.state.swaggerComponent}
            </ApiLayout>
        )
    }
}

EventPage.propTypes = {
    location: PropTypes.object,
};

export default EventPage;
