import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

class Login extends React.Component {


    login(){
        
    }

    render() {
        return (
            <Container>
                <Form style={{ width: '35%', marginLeft: 'auto', marginRight: 'auto', color: '#6c757d' }}>
                    <Form.Group style={{ margin: '10px', textAlign: 'left' }}>
                        <Form.Label>Correo Electrónico </Form.Label>
                        <Form.Control id="email" placeholder="Ingrese su correo electrónico" type="text" />
                    </Form.Group>

                    <Form.Group style={{ margin: '10px', textAlign: 'left' }}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control id="password" placeholder="Ingrese su contraseña" type="password" />
                    </Form.Group>

                    <Form.Group style={{ textAlign: 'center', marginTop: '30px' }}>
                        <Button style={{ width: '130px', marginLeft: 'auto', marginRight: 'auto' }} onClick={this.login}>Login</Button>
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