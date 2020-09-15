import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Navbar, NavItem, Nav} from 'react-bootstrap'

class NavigationMenu extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="/">
                    Profiliance
                </Navbar.Brand>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/news">News</Nav.Link>
            </Navbar>
           
        )
    }
}
export default NavigationMenu;