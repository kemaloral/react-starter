import * as React from 'react';
import { Container, Nav, NavbarBrand, Navbar, NavItem, Row, Col, Input, Collapse, NavLink } from 'reactstrap';

class Content extends React.Component<any, any>{
    constructor(props) {
        super(props);

    }

    render() {
        return <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            {this.props.children}
        </main>
    }
}

export default Content;