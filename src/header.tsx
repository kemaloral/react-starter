import * as React from 'react';
import { Container, Nav, NavbarBrand, Navbar, NavItem, Row, Col, Input, Collapse, NavLink } from 'reactstrap';

class header extends React.Component<any, any>{
    constructor(props) {
        super(props);
        
    }

    render() {
        return <Navbar dark={true} fixed="top" color="dark" className="flex-md-nowrap p-0 shadow" style={{ color: "white" }}>
                <NavbarBrand className="col-sm-3 col-md-2 mr-0">
                   {this.props.title}
               </NavbarBrand>
                <Input placeholder="Ara" className="form-control-dark w-100" />
                <Nav className="navbar-nav px-3">
                    <NavItem className="text-nowrap">
                        <NavLink href="">Çıkış</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>

    }
}

export default header;