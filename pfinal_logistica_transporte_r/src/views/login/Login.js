import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
//import axios from 'axios';
import Col from 'react-bootstrap/Col';


class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            email: '',
            password: '',
            tipo:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        this.verificarDatos()
    }

    verificarDatos(){

        
    }


    render() {
        return (
            <Container>
                <Form style={{ width: '35%', marginLeft: 'auto', marginRight: 'auto', color: '#6c757d' }}>
                    <Form.Row>
                        <Form.Group as={Col} style={{ margin: '10px', textAlign: 'left' }}>
                            <Form.Label htmlFor="email">Email:</Form.Label>
                            <Form.Control name="email" id="email" type="text"
                                onChange={this.handleChange} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row style={{ textAlign: 'left' }}>
                        <Form.Group as={Col} style={{ margin: '10px' }}>
                            <Form.Label htmform="password">Contrasena:  </Form.Label>
                            <Form.Control name="password" id="password" type="password"
                                onChange={this.handleChange} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group style={{ margin: '10px', textAlign: 'center' }}>
                        <Form.Row>
                            <Button style={{ marginLeft: 'auto', marginRight: 'auto' }} id='registrar'
                                onClick={this.handleSubmit}> Login</Button>
                        </Form.Row>
                    </Form.Group>

                    <Form.Group style={{ textAlign: 'center' }}>
                        <a id='btnReg' href="Register">Registrarse</a><br />
                        <a id='btnRec' href="RecoverPassword" name="OlvideContrasena">
                            olviste tu contraseña?
                            </a>
                    </Form.Group>
                </Form>
            </Container>
        );
    }

}

export default Login;