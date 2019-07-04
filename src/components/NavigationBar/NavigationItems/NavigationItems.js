import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => {
    return (
        <ul className={classes.NavigationItems + ' mx-5'}>
            <NavigationItem link="/">Home</NavigationItem>
            <NavigationItem link="/about">About</NavigationItem>
            <NavigationItem link="/add-movie">Add Movie</NavigationItem>
            <NavigationItem link="/user">User</NavigationItem>
        </ul>
    )
}

export default navigationItems