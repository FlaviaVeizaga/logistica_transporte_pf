import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'

class Register extends React.Component {

    constructor(args) {
        super(args)
        this.state = {
           newUser ={
            name: '',
            email: '',
            password: '',
            password1: '',
            nombre: '',
            apellido: '',
            telefono: '',
            pais: '',
            message: '',
            tipo: ''
           }
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);

        
    }


    handleInput(key, e) {
     
        var state = Object.assign({}, this.state.newUser); 
        state[key] = e.target.value;
        this.setState({newUser: state });
      }
      handleSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.state.newUser);
      }
     
    onChange(e) {
    
       /*     this.setState({
                [e.target.name]: e.target.value,
                [e.target.email]: e.target.value,
                [e.target.password]: e.target.value,
                [e.target.password1]: e.target.value,
                [e.target.nombre]: e.target.value,
                [e.target.apellido]: e.target.value,
                [e.target.telefono]: e.target.value,
                [e.target.tipo]: e.target.value,
                [e.target.country]: e.target.value
            })
        */
    }

    

    signUp(email, password) {



        this.props.history.push('/')
    }

    save(e) {

        if (!this.validate()) {
            alert(this.state.message)
            return;
        }


        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        const password1 = document.querySelector('#password1').value;
        const nombre = document.querySelector('#nombre').value;
        const apellido = document.querySelector('#apellido').value;
        const telefono = document.querySelector('#telefono').value;
        const pais = document.querySelector('#pais').value;
        const tipo_usuario = document.querySelector('#tipo_usuario').value;



        if (password === password1) {
            try {
                let nuevoUsuario = null;
 
                this.setState({
                    message: 'Registrado Correctamente'
                })
                console.log('ok');
                alert(this.state.message + " " + nuevoUsuario)

            } catch (error) {
                this.setState({
                    message: error
                })
                alert(error)

            }
        } else {
            alert('Las contrasenas no coinciden');
        }

    }

    validate() {
        if (this.state.acept !== true) {
            this.setState({
                message: 'Complete los datos faltantes'
            })
            return false
        }
        return true
    }

    render() {
        return (
            <Form style={{ width: '35%', marginLeft: 'auto', marginRight: 'auto', color: '#6c757d' }}>
                <div style={{ margin: '10px' }}>

                    <Form.Group style={{ margin: '10px', textAlign: 'left' }}>
                        <Form.Label htmlFor="name">User_name:  </Form.Label>
                        <Form.Control name="name" id="name" type="text" value={this.state.name}
                            onChange={this.onChange.bind(this)} />
                    </Form.Group>

                    <Form.Group as={Col} style={{ textAlign: 'left' }}>
                        <Form.Label htmlFor="email" >Email:   </Form.Label>
                        <Form.Control name="email" id="email" type="text" value={this.state.email}
                            onChange={this.onChange.bind(this)} />
                    </Form.Group>


                    <Form.Row style={{ textAlign: 'left' }}>
                        <Form.Group as={Col} style={{ margin: '10px' }}>
                            <Form.Label htmform="password">Contrasena:  </Form.Label>
                            <Form.Control name="password" id="password" type="password" value={this.state.password}
                                onChange={this.onChange.bind(this)} />
                        </Form.Group>

                        <Form.Group as={Col} style={{ margin: '10px' }}>
                            <Form.Label htmform="password1">Confirmar Contrasena: </Form.Label>
                            <Form.Control name="password1" id="password1" type="password" value={this.state.password1}
                                onChange={this.onChange.bind(this)} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} style={{ margin: '10px', textAlign: 'left' }}>
                            <Form.Label htmlFor="nombre">Nombre:</Form.Label>
                            <Form.Control name="nombre" id="nombre" type="text" value={this.state.nombre}
                                onChange={this.onChange.bind(this)} />
                        </Form.Group>

                        <Form.Group as={Col} style={{ margin: '10px', textAlign: 'left' }}>
                            <Form.Label htmlFor="apellido">Apellido:</Form.Label>
                            <Form.Control name="apellido" id="apellido" type="text" value={this.state.apellido}
                                onChange={this.onChange.bind(this)} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} style={{ margin: '10px', textAlign: 'left' }}>
                            <Form.Label htmlFor="telefono">Telefono:</Form.Label>
                            <Form.Control name="telefono" id="telefono" type="text" value={this.state.telefono}
                                onChange={this.onChange.bind(this)} />
                        </Form.Group>

                        <Form.Group as={Col} style={{ margin: '10px', textAlign: 'left' }}>
                            <Form.Label htmlFor="pais">Pais:</Form.Label>
                            <Form.Control name="pais" id="pais" type="text" value={this.state.pais}
                                onChange={this.onChange.bind(this)} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group style={{ marginLeft: '10px', textAlign: 'left' }}>
                        <Form.Label htmlFor="tipo">Tipo de Usuario: </Form.Label>
                        {['radio'].map((type) => (
                            <div key={type} style={{ textAlign: 'left' }} className="mb-3">
                                <Form.Check type={type} id='tipo' style={{ display: 'flex' }}>

                                    <Form.Group style={{ marginTop: '15px', width: '50%' }}>
                                        <Form.Check.Input type="radio" name="tipo" checked={true} value={this.state.tipo}
                                            onChange={this.onChange.bind(this)} isValid />
                                        <Form.Check.Label style={{ color: '#6c757d' }}>Dador de Carga</Form.Check.Label>
                                    </Form.Group>

                                    <Form.Group style={{ marginTop: '15px', width: '50%' }}>
                                        <Form.Check.Input type="radio" name="tipo" value={!this.state.tipo}
                                            onChange={this.onChange.bind(this)} isValid />
                                        <Form.Check.Label style={{ color: '#6c757d' }}>Transportista</Form.Check.Label>
                                    </Form.Group>

                                </Form.Check>
                            </div>
                        ))}
                    </Form.Group>


                    <Form.Group style={{ margin: '10px', textAlign: 'center' }}>
                        <Form.Row>
                            <Button style={{ margin: '10px', width: '30%', marginLeft: '30%' }} id='registrar'
                                onClick={this.save.bind(this)}> Registrar</Button>
                            <a style={{ margin: '10px' }} href='/'>Volver</a>

                        </Form.Row>
                    </Form.Group>

                </div>
            </Form>
        )
    }


}

export default Register