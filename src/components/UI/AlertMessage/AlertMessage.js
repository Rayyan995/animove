import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';

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
            console.log('isSuccessful');
            variant = 'danger';
            alertHeading = 'Sorry bud!'
            alertMsg = 'Movie was NOT uploaded successfully 😞' 
        }

        if (this.props.show) {
            return (
                <div style={{ position: "fixed", top: 60, right: 0 }}>
                    <Alert variant={variant} onClose={this.props.close} dismissible>
                        <Alert.Heading>{alertHeading}</Alert.Heading>
                        <p>{alertMsg}</p>
                    </Alert>
                </div>
            );
        }
        return null;
    }
}