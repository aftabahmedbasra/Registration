import React from 'react';
import { Button, Form,  Input, Container, Col, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';

class ReactForm extends React.Component {

  render() {
        return <Col sm="12" md={{ size: 8, offset: 2}}>
            <Form onSubmit={this.props.sendData} >
                <InputGroup>
                    <Input name="name" type="text" placeholder="Enter Name" />
                    <Input name="email"  type="email" placeholder="Enter Email" />
                    <Input name="password" type="password" placeholder="Enter Password" />
                    <Input className="btn btn-primary" type="submit" value="Submit" />
                </InputGroup>
                <br />

            </Form>
        </Col>
  }
}
export default ReactForm
