import React from 'react';
import { Button, Form,  Input, Container, Col, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';

class ReactForm extends React.Component {

  render() {
    return <Container>
        
            <Col sm="12" md={{ size: 6, offset: 3 }}>
                <Form onSubmit={this.props.sendData} >
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>Enter Name</InputGroupText>
                        </InputGroupAddon>
                        <Input name="name" type="text" />
                    </InputGroup>
                    <br />
                    <InputGroup>
                        <Input name="email"  type="email" />
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>Enter Email</InputGroupText>
                        </InputGroupAddon>
                    </InputGroup>
                    
                    <br />
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>Enter Password</InputGroupText>
                        </InputGroupAddon>
                        <Input name="password" type="password" />
                    </InputGroup>
                    <br />
                    <Button>Submit</Button>
                </Form>
            </Col>
        
        </Container>
    }
}
export default ReactForm
