import React, { Component } from 'react';

import NavigationBar from "../../components/NavigationBar/NavigationBar";
import Footer from '../../components/Footer/Footer';
import classes from './Layout.module.css';

class Layout extends Component {
    render() {
        return (
            <React.Fragment>
                <NavigationBar siteName='ANIMO'/>
                <div className={classes.Content + ' container'}>
                    {this.props.children}
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default Layout;