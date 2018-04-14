import * as React from "react";
import * as ReactDom from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';



function renderApp() {
    ReactDom.render(
        <Container>
            <Row>
                <Col md="4">
                    fvfrv
                </Col>
            </Row>
        </Container>,
        document.getElementById('HelloDiv')
    );
}

renderApp();

if (module.hot) {
    module.hot.accept();
    renderApp();
}
