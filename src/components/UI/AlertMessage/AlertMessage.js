import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';

import Backdrop from '../Backdrop/Backdrop';

export default class AlertMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
        };
    }
    render() {
        let variant = 'info';
        let alertHeading = 'Great bud!'
        let alertMsg = 'Movie uploaded Successfully 😃'
        if (!this.props.isSuccessful) {
            variant = 'danger';
            alertHeading = 'Sorry bud!'
            alertMsg = 'Movie was NOT uploaded successfully 😞'
        }
        if (this.props.show) {
            return (
                <div style={{ position: "fixed", top: 60, right: 0 }}>
                <Backdrop show={this.props.show} />
                    <div style={{ zIndex: 500 }}>
                        <Alert variant={variant} onClose={this.props.close} dismissible>
                            <Alert.Heading>{alertHeading}</Alert.Heading>
                            <p>{alertMsg}</p>
                            <button onClick={this.props.close} className='btn btn-secondary' >Close</button>
                        </Alert>
                    </div>
                </div>
            );
        }
        return null;
    }
}