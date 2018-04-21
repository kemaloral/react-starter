import * as React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class page2 extends React.Component<any, any>{

    componentDidMount() {
    }
    
    render() {
        return <div>
            <Form>
                <FormGroup row>
                    <Label for="exampleEmail" sm={2}>Email</Label>
                    <Col sm={10}>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="examplePassword" sm={2}>Password</Label>
                    <Col sm={10}>
                        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleSelect" sm={2}>Select</Label>
                    <Col sm={10}>
                        <Input type="select" name="select" id="exampleSelect" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleSelectMulti" sm={2}>Select Multiple</Label>
                    <Col sm={10}>
                        <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple />
                    </Col>
                </FormGroup>
            </Form>
        </div>
    }
}

export default page2