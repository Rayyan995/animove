import React, { Component } from 'react';

import NavigationBar from "../../components/NavigationBar/NavigationBar";
import Footer from '../../components/Footer/Footer';
import classes from './Layout.module.css';

class Layout extends Component {
    render() {
        return (
            <React.Fragment>
                <NavigationBar siteName='ANIMOV'/>
                <div className={classes.Content + ' container px-4'}>
                    {this.props.children}
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default Layout;