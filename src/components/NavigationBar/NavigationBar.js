import React from 'react';
// import { NavLink } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import FormControl from 'react-bootstrap/FormControl';

import NavigationItems from './NavigationItems/NavigationItems';
import classes from "./NavigationBar.module.css";

const NavigationBar = (props) => {
    return (
        <Navbar className={classes.Color} variant="dark" fixed="top" expand="lg">
            <Navbar.Brand className='ml-3' href="#"><h2 className={classes.Brand} ><strong>{props.siteName}</strong></h2></Navbar.Brand>
            <span className={classes.Span}>HD Animation Movies</span>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" className='mr-3' />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">

                </Nav>
                <Form inline>
                    {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button> */}
                    <Nav className="mr-auto">
                        <NavigationItems />
                    </Nav>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;