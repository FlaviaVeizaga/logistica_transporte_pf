import React from 'react';
import axios from 'axios';
import history from '../../config/history';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'

class EditarPersona extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            id: props.match.params ? props.match.params.id : { id: 0 },
            nombre: '',
            apellido: '',
            telefono: '',
            pais: '',
            email: '',
            password: '',
            password1: '',
        }
        this.handleChange = this.handleChange.bind(this);
        
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    componentDidMount(){
        this.cargarPersona(this.state.id);
    }


    cargarPersona(id){
        try {
            axios.get("http://localhost:8000/api/personas/" + id)
                .then(
                    (result) => {
                        if (result.data.res === 'success') {
                            let response = result.data.data;
                            this.setState({
                                nombre: response.nombre,
                                apellido: response.apellido,
                                telefono: response.telefono,
                                pais: response.pais,
                                email: response.email,
                                password: response.password,
                                password1: response.password
                            });

                        } else
                            alert(result.data.res);

                    }
                )
        } catch (error) {
            console.log(error);

        }
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
            this.updateUser(persona, persona.id);
        }
    }

    updateUser(persona, id) {
        try {
            axios.put("http://localhost:8000/api/personas/"+id, persona)
            .then((response) => {
                if (response.data.res === 'error') {
                    alert(response.data.message.email);
                    return
                } else {
                    history.push('/DadorCarga/Home/' + id)

                }
            })
        } catch (error) {
            console.log(error)
        }

    }

    render(){
        return(
            <Form style={{ width: '35%', marginLeft: 'auto', marginRight: 'auto', color: '#6c757d' }}>
                <div style={{ margin: '10px' }}>

                    <Form.Group style={{ margin: '10px', textAlign: 'left' }}>
                        <Form.Label htmlFor="nombre">Nombre:  </Form.Label>
                        <Form.Control name="nombre" id="nombre" type="text"
                            onChange={this.handleChange} value={this.state.nombre}/>
                    </Form.Group>

                    <Form.Group as={Col} style={{ textAlign: 'left' }}>
                        <Form.Label htmlFor="apellido" >Apellido:   </Form.Label>
                        <Form.Control name="apellido" id="apellido" type="text"
                            onChange={this.handleChange} value={this.state.apellido}/>
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} style={{ margin: '10px', textAlign: 'left' }}>
                            <Form.Label htmlFor="telefono">Telefono:</Form.Label>
                            <Form.Control name="telefono" id="telefono" type="text"
                                onChange={this.handleChange} value={this.state.telefono}/>
                        </Form.Group>

                        <Form.Group as={Col} style={{ margin: '10px', textAlign: 'left' }}>
                            <Form.Label htmlFor="pais">Pais:</Form.Label>
                            <Form.Control name="pais" id="pais" type="text"
                                onChange={this.handleChange} value={this.state.pais}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} style={{ margin: '10px', textAlign: 'left' }}>
                            <Form.Label htmlFor="email">Email:</Form.Label>
                            <Form.Control name="email" id="email" type="text"
                                onChange={this.handleChange} value={this.state.email} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row style={{ textAlign: 'left' }}>
                        <Form.Group as={Col} style={{ margin: '10px' }}>
                            <Form.Label htmform="password">Contrasena:  </Form.Label>
                            <Form.Control name="password" id="password" type="password"
                                onChange={this.handleChange} value={this.state.password}  />
                        </Form.Group>

                        <Form.Group as={Col} style={{ margin: '10px' }}>
                            <Form.Label htmform="password1">Confirmar Contrasena: </Form.Label>
                            <Form.Control name="password1" id="password1" type="password"
                                onChange={this.handleChange} value={this.state.password1} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group style={{ margin: '10px', textAlign: 'center' }}>
                        <Form.Row>
                            <Button style={{ margin: '10px', width: '30%', marginLeft: '30%' }} id='actualizar'
                                onClick={this.handleSubmit}> Actualizar</Button>
                            <a style={{ margin: '10px' }} href='/'>Volver</a>
                        </Form.Row>
                    </Form.Group>
                </div>
            </Form>
        )
    }


}

export default EditarPersona;