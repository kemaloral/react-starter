import * as React from 'react';
import { Container, Nav, NavbarBrand, Navbar, NavItem, Row, Col, Input, Collapse } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Sidebar extends React.Component<any, any>{
    constructor(props) {
        super(props);

    }

    render() {
        return <div className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
                <Nav className="flex-column">
                    <NavItem>
                        <NavLink to="/page1" className="nav-link">
                            <i className="fa fa-home"></i> Sayfa 1
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/page2" className="nav-link" >
                            <i className="fa fa-car"></i> Sayfa 2
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/page3" className="nav-link" >
                            <i className="fa fa-user"></i> Sayfa 3
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/page4" className="nav-link" >
                            <i className="fa fa-bus"></i> Sayfa 4
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/page5" className="nav-link" >
                            <i className="fa fa-plus"></i> Sayfa 5
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>
        </div>

    }
}

export default (Sidebar);