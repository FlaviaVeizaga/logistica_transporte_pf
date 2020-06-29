import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import history from '../../config/history'

class Perfil extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            nombre: '',
            apellido: '',
            telefono: '',
            pais: '',
            email: '',
        }
        this.handleOnClick = this.handleOnClick.bind(this);

    }

    componentDidMount() {
        if (window.localStorage.getItem('id') === null) {
            alert('no existe Usuario en este momento');
            history.push('/');
        }
        else {
            const valor = window.localStorage.getItem('id');
            this.state.id = valor;
        }
        this.cargarDatos();

    }

    handleOnClick(event) {
        event.preventDefault();
        history.push('/Personas/Editar');
    }


    cargarDatos() {
        try {
            axios.get("http://localhost:8000/api/personas/" + this.state.id)
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
                            });

                        }
                        else
                            alert(result.data.res);

                    }
                )
        } catch (error) {
            console.log(error);

        }
    }


    render() {

        return (
            
            <Container>

                <Card style={{ width: '18rem', padding: '15px' }}>
                <h1 >{this.state.nombre + ' ' + this.state.apellido}</h1>
                    
                    <img src={process.env.PUBLIC_URL + '/img/'+this.state.nombre+'.jpg'} alt="Foto de Perfl" />
                    <Card.Title style={{ textAlign: 'left' }}>Contacto: {this.state.telefono}</Card.Title>
                    <Card.Title style={{ textAlign: 'left' }}>Pais: {this.state.pais}</Card.Title>
                    <Card.Title style={{ textAlign: 'left' }}>Email: {this.state.email}</Card.Title>
                    <Button variant='secondary' action onClick={this.handleOnClick}>Editar Perfil</Button>
                </Card>
            </Container>
        )

    }

}

export default Perfil;