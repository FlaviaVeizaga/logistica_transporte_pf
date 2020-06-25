import React from 'react'
import Container from 'react-bootstrap/Container'
import MenuDadorCarga from '../menu/MenuDadorCarga'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Table from 'react-bootstrap/Table'

class Transportista extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params ? props.match.params.id : { id: 0 },
            listaTiendas: [],
            nombre: '',
            apellido: '',
            telefono: '',
            pais: '',
            email: '',
        }
    }


    componentDidMount() {
        if (this.state.id !== undefined) {
            console.log("DADOR DE CARGA CON ID " + this.state.id)
            this.cargarDatos();
        } else {
            alert("error al leer los datos " + this.state.id)
            console.log(this.props)
        }
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
                                email: response.email
                            });

                        } else
                            alert(result.data.res);

                    }
                )
        } catch (error) {
            console.log(error);

        }
    }



    render() {
        return (

            <div>
                <MenuDadorCarga />
                <h1 style={{ margin: '20px' }}>Transportista: {this.state.nombre + ' ' + this.state.apellido}</h1>
                <Card style={{ padding: '20px', margin: '20px' }}>
                    <Row >
                        <Col sm={3}>
                            <Container style={{}}>
                                <Card style={{ width: '18rem', padding: '15px' }}>
                                    <img src={process.env.PUBLIC_URL + '/img/jorge.jpg'} alt="Perfil Jorge" />
                                    <Card.Title style={{ textAlign: 'left' }}>Contacto: {this.state.telefono}</Card.Title>
                                    <Card.Title style={{ textAlign: 'left' }}>Pais: {this.state.pais}</Card.Title>
                                    <Card.Title style={{ textAlign: 'left' }}>Email: {this.state.email}</Card.Title>
                                </Card>
                            </Container>
                        </Col>
                        <Col sm={9}>
                            <Container>
                                <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                                    <Row>
                                        <Col sm={4}>
                                            <ListGroup>
                                                <ListGroup.Item variant='warning' action href="#link1">
                                                    Resumen
                                            </ListGroup.Item>
                                                <ListGroup.Item variant='warning' action href="#link2">
                                                    Viajes Realizados
                                            </ListGroup.Item>
                                                <ListGroup.Item variant='warning' action href="#link3">
                                                    Vehiculos
                                            </ListGroup.Item>
                                            </ListGroup>
                                        </Col>
                                        <Col sm={8}>
                                            <Tab.Content>
                                                <Tab.Pane eventKey="#link1">
                                                    <h1>Datos informativos Transportista</h1>

                                                </Tab.Pane>
                                                <Tab.Pane eventKey="#link2">
                                                    <Card>
                                                        <h1>Mis Viajes</h1><Button variant='success'>Buscar Ofertas de Viajes</Button>
                                                        <Table>
                                                            <thead>
                                                                <tr>
                                                                    <th>Origen</th>
                                                                    <th>Destino</th>
                                                                    <th>Tonelaje</th>
                                                                    <th>Estado</th>
                                                                    <th></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {/*this.state.listaParaMostrar.map(item =>

                                                                <tr key={"item" + item.index}>
                                                                    <td>{item.index} </td>
                                                                    <td>{item.material_id} </td>
                                                                    <td>{item.nombreMaterial} </td>
                                                                    <td>{item.cantidadMaterial} </td>
                                                                    <td>{item.unidadmedida} </td>
                                                                    <td><Button onClick={() => { this.eliminar(item.material) }} variant="danger">Eliminar</Button></td>

                                                            </tr>)*/}
                                                            </tbody>

                                                        </Table>

                                                    </Card>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="#link3">
                                                    <h1>Mis Vehiculos</h1>

                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Col>
                                    </Row>
                                </Tab.Container>

                            </Container>
                        </Col>
                    </Row>
                </Card>
            </div>
        )
    }
}

export default Transportista;