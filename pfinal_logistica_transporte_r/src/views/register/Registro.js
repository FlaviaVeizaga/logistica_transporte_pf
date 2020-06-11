import React from 'react';
import axios from 'axios';
import history from '../../config/history';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'

class Registro extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            id: 0,
            nombre: '',
            apellido: '',
            telefono: '',
            pais: '',
            email: '',
            password: '',
            password1: '',
            persona_id: 0
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
        event.preventDefault();
        this.enviarDatos();
    }
    enviarDatos() {
        if (this.state.password !== this.state.password1) {
            alert('las contrasenas no coinciden');
            return
        }

        const persona = {
            nombre: this.state.nombre,
            apellido: this.state.apellido,
            telefono: this.state.telefono,
            pais: this.state.pais,
            email: this.state.email,
            password: this.state.password
        }

        if (this.state.id === 0) {
            this.insertUsuario(persona);

        } else {
            persona.id = this.state.id;
            this.updateUser(persona);
        }
    }

    insertUsuario(persona) {
        axios.post("http://localhost:8000/api/personas", persona)
            .then((response) => {
                if (response.data.res === 'error') {
                    alert(response.data.message.email);
                    return
                } else {
                    this.setState({
                        persona_id: response.data.persona_id
                    })

                    alert(response.data.res);
                    history.push('/Tipo/'+this.state.persona_id)

                }
                console.log(response.data)
            })

    }

    render() {
        return (
            <Form style={{ width: '35%', marginLeft: 'auto', marginRight: 'auto', color: '#6c757d' }}>
                <div style={{ margin: '10px' }}>

                    <Form.Group style={{ margin: '10px', textAlign: 'left' }}>
                        <Form.Label htmlFor="nombre">Nombre:  </Form.Label>
                        <Form.Control name="nombre" id="nombre" type="text"
                            onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group as={Col} style={{ textAlign: 'left' }}>
                        <Form.Label htmlFor="apellido" >Apellido:   </Form.Label>
                        <Form.Control name="apellido" id="apellido" type="text"
                            onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} style={{ margin: '10px', textAlign: 'left' }}>
                            <Form.Label htmlFor="telefono">Telefono:</Form.Label>
                            <Form.Control name="telefono" id="telefono" type="text"
                                onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group as={Col} style={{ margin: '10px', textAlign: 'left' }}>
                            <Form.Label htmlFor="pais">Pais:</Form.Label>
                            <Form.Control name="pais" id="pais" type="text"
                                onChange={this.handleChange} />
                        </Form.Group>
                    </Form.Row>
 
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

                        <Form.Group as={Col} style={{ margin: '10px' }}>
                            <Form.Label htmform="password1">Confirmar Contrasena: </Form.Label>
                            <Form.Control name="password1" id="password1" type="password"
                                onChange={this.handleChange} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group style={{ margin: '10px', textAlign: 'center' }}>
                        <Form.Row>
                            <Button style={{ margin: '10px', width: '30%', marginLeft: '30%' }} id='registrar'
                                onClick={this.handleSubmit}> Registrar</Button>
                            <a style={{ margin: '10px' }} href='/'>Volver</a>
                        </Form.Row>
                    </Form.Group>
                </div>
            </Form>
        )
    }
}

export default Registro;