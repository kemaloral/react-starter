import * as React from 'react';
import { Container, Nav, NavbarBrand, Navbar, NavItem, Row, Col, Input, Collapse, NavLink } from 'reactstrap';
import Header from './header';
import Sidebar from './sidebar';
import Content from './content';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Page4 from './pages/page4';
import Page5 from './pages/page5';
import { BrowserRouter, HashRouter, Switch, Route } from 'react-router-dom';




class layout extends React.Component<any, any>{
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true
        }
    }

    onNavChange(activeIndex) {
        this.setState({ activePageIndex: activeIndex });
    }
    render() {
        return <div>
            <Header title="React Demo" />
            <Container fluid>
                <BrowserRouter>
                    <Row>
                        <Sidebar></Sidebar>
                        <Content>
                            <Route exact path="/page1" component={Page1} />
                            <Route path="/page2" component={Page2} />
                            <Route path="/page3" component={Page3} />
                            <Route path="/page4" component={Page4} />
                            <Route path="/page5" component={Page5} />
                        </Content>
                    </Row>
                </BrowserRouter>
            </Container>
        </div>

    }
}

export default layout;