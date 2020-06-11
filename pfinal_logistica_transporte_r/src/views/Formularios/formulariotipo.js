import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import history from '../../config/history'
import Card from 'react-bootstrap/Card'

class formulariotipo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            persona_id: props.match.params ? props.match.params.persona_id : { persona_id: 0 },
            tipo: 'dador'
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(this.state.tipo)
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.state.tipo === 'trans') {
            this.insertTransportista()
        } else {
            this.insertDadorCarga()

        }
    }

    insertDadorCarga() {
        const dadorcarga ={
            persona_id: this.state.persona_id
        }
        axios.post("http://localhost:8000/api/dadorescarga", dadorcarga)
            .then((respuesta) => {
                if (respuesta.data.res === 'error') {
                    alert(respuesta.data.res)
                    return
                } else {
                    alert(respuesta.data.res + ' id: ' + dadorcarga.persona_id)
                    history.push('/')
                }
            })
    }


    insertTransportista() {
        const transportista ={
            persona_id: this.state.persona_id
        }
        axios.post("http://localhost:8000/api/transportistas", transportista)
            .then((respuesta) => {
                if (respuesta.data.res === 'error') {
                    alert(respuesta.data.res)
                    return
                } else {
                    alert(respuesta.data.res + ' id: ' + transportista.persona_id)
                    history.push('/')
                }
            })
    }

    render() {
        return (
            <Container>

                <Card style={{ width: '35%', marginLeft: 'auto', marginRight: 'auto', color: '#6c757d', marginTop: '50px' }}>
                    <Form.Group style={{ marginLeft: '10px', textAlign: 'left' }}>
                        <Form.Label htmlFor="tipo">Tipo de Usuario </Form.Label>
                        {['radio'].map((type) => (
                            <div key={type} style={{ textAlign: 'left' }} className="mb-3">
                                <Form.Check type={type} id='tipo' style={{ display: 'flex' }} onChange={this.handleChange}>

                                    <Form.Group style={{ marginTop: '15px', width: '50%' }}>
                                        <Form.Check.Input type="radio" name="tipo" checked={this.state.tipo === 'dador'} value='dador'
                                            onChange={this.handleChange} />
                                        <Form.Check.Label style={{ color: '#6c757d' }}>Dador de Carga</Form.Check.Label>
                                    </Form.Group>

                                    <Form.Group style={{ marginTop: '15px', width: '50%' }}>
                                        <Form.Check.Input type="radio" name="tipo" checked={this.state.tipo === 'trans'} value="trans"
                                            onChange={this.handleChange} />
                                        <Form.Check.Label style={{ color: '#6c757d' }}>Transportista</Form.Check.Label>
                                    </Form.Group>

                                </Form.Check>
                            </div>
                        ))}
                    </Form.Group>
                    <Form.Group>
                        <Button style={{ margin: '10px' }} id='registrar'
                            onClick={this.handleSubmit}> Completar </Button>
                    </Form.Group>
                </Card>
            </Container>
        )
    }
}
export default formulariotipo;