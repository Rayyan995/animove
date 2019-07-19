import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => {
    return (
        <ul className={classes.NavigationItems + ' mx-5'}>
            <NavigationItem link="/"><span style={{fontSize: '1.3em'}}><i class="fas fa-home"></i></span></NavigationItem>
            <NavigationItem link="/add-movie"><span style={{fontSize: '1.3em'}}><i class="fas fa-plus-square"></i> Movie</span></NavigationItem>
        </ul>
    )
}

export default navigationItems