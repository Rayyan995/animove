import React, { Component } from 'react';
import { connect } from 'react-redux';

import Details from '../../components/Details/Details';
import classes from './ViewDetails.module.css';
import Trailer from '../../components/Trailer/Trailer';

class ViewDetails extends Component {
    state = {
        showModal: false
    }
    modalShowedHandler = () => {
        this.setState({ showModal: true });
    }
    modalClosedHandler = () => {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <div className={classes.ViewDetails + ' p-4'}>
                <Details
                    clickedMovie={this.props.clickedMovie}
                    show={this.state.showModal}
                    modalShowed={this.modalShowedHandler}
                    modalClosed={this.modalClosedHandler} />
                <Trailer />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        clickedMovie: state.clickedMovie,
    };
};

export default connect(mapStateToProps)(ViewDetails);

