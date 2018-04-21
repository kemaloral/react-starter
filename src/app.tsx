import * as React from "react";
import * as ReactDom from "react-dom";
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import './site.css';
import { Container, Row, Col } from 'reactstrap';
import Layout from './layout';


function renderApp() {
    ReactDom.render(
        <Layout></Layout>,
        document.getElementById('HelloDiv')
    );
}

renderApp();

if (module.hot) {
    module.hot.accept();
    renderApp();
}
