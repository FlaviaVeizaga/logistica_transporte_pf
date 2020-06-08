import React, { useEffect } from 'react';
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
            tipo: '',
            persona_id: 0
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            nombre: event.target.value,
            apellido: event.target.value,
            telefono: event.target.value,
            pais: event.target.value,
            email: event.target.value,
            password: event.target.value,
            password1: event.target.value,
            tipo: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.enviarDatos();
    }


    enviarDatos() {

        if (password !== password1) {
            alert('las contrasenas no coinciden');
        }
        const persona = {
            nombre,
            apellido,
            telefono,
            pais,
            email,
            password
        }

        if (id == 0) {
            insertUsuario(persona);
        } else {
            persona.id = id;
            updateUser(persona);
        }
    }

    insertUsuario(persona) {
        const persona_id = axios.post("http://localhost:8000/api/personas", persona)
            .then(response => {
                console.log('datos insertados', response.data.data);
            })

        if (tipo == 'dador') {
            insertDadorCarga(persona_id);
        }

        if (tipo == 'trans') {
            insertTransportista(persona_id);
        }

    }

    insertDadorCarga(id) {
        axios.post("http://localhost:8000/api/dadorescarga", id)
            .then(response => {
                console.log('datos insertados en dador de carga', response.data.data)
            })
        history.push('/')

    }

    insertDadorCarga(id) {
        axios.post("http://localhost:8000/api/transportistas", id)
            .then(response => {
                console.log('datos insertados en dador de carga', response.data.data)
            })
        history.push('/')

    }

    updateUser(persona) {

    }


    render() {
        return (
            <Form style={{ width: '35%', marginLeft: 'auto', marginRight: 'auto', color: '#6c757d' }}>
                <div style={{ margin: '10px' }}>

                    <Form.Group style={{ margin: '10px', textAlign: 'left' }}>
                        <Form.Label htmlFor="name">User_name:  </Form.Label>
                        <Form.Control name="name" id="name" type="text" 
                            onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group as={Col} style={{ textAlign: 'left' }}>
                        <Form.Label htmlFor="email" >Email:   </Form.Label>
                        <Form.Control name="email" id="email" type="text" 
                            onChange={this.handleChange} />
                    </Form.Group>


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

                    <Form.Row>
                        <Form.Group as={Col} style={{ margin: '10px', textAlign: 'left' }}>
                            <Form.Label htmlFor="nombre">Nombre:</Form.Label>
                            <Form.Control name="nombre" id="nombre" type="text" 
                                onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group as={Col} style={{ margin: '10px', textAlign: 'left' }}>
                            <Form.Label htmlFor="apellido">Apellido:</Form.Label>
                            <Form.Control name="apellido" id="apellido" type="text" 
                                onChange={this.handleChange} />
                        </Form.Group>
                    </Form.Row>

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

                    <Form.Group style={{ marginLeft: '10px', textAlign: 'left' }}>
                        <Form.Label htmlFor="tipo">Tipo de Usuario: </Form.Label>
                        {['radio'].map((type) => (
                            <div key={type} style={{ textAlign: 'left' }} className="mb-3">
                                <Form.Check type={type} id='tipo' style={{ display: 'flex' }}>

                                    <Form.Group style={{ marginTop: '15px', width: '50%' }}>
                                        <Form.Check.Input type="radio" name="tipo" checked={true} value='dador'
                                            onChange={this.handleChange} isValid />
                                        <Form.Check.Label style={{ color: '#6c757d' }}>Dador de Carga</Form.Check.Label>
                                    </Form.Group>

                                    <Form.Group style={{ marginTop: '15px', width: '50%' }}>
                                        <Form.Check.Input type="radio" name="tipo" value="trans"
                                            onChange={this.handleChange} isValid />
                                        <Form.Check.Label style={{ color: '#6c757d' }}>Transportista</Form.Check.Label>
                                    </Form.Group>

                                </Form.Check>
                            </div>
                        ))}
                    </Form.Group>


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