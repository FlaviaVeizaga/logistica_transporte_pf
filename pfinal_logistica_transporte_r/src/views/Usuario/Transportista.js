import React from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Table from 'react-bootstrap/Table'
import NavBarMenu from '../menu/NavBarMenu';
import Perfil from './Perfil';

class Transportista extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            listaTiendas: [],
            nombre: '',
            apellido: '',
            telefono: '',
            pais: '',
            email: '',
        }
    }

    render() {
        return (

            <div>
                <NavBarMenu />
                <Card style={{ padding: '20px', margin: '20px' }}>
                    <Row >
                        <Col sm={3}>
                            <Perfil/>
                        </Col>
                        <Col sm={9}>
                            <Container>
                                <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                                    <Row>
                                        <Col sm={3}>
                                            <ListGroup>
                                                <ListGroup.Item variant='secondary' action href="#link1">
                                                    Resumen
                                            </ListGroup.Item>
                                                <ListGroup.Item variant='secondary' action href="#link2">
                                                    Viajes Realizados
                                            </ListGroup.Item>
                                                <ListGroup.Item variant='secondary' action href="#link3">
                                                    Vehiculos
                                            </ListGroup.Item>
                                            </ListGroup>
                                        </Col>
                                        <Col sm={9}>
                                            <Tab.Content>
                                                <Tab.Pane eventKey="#link1">
                                                    <h1>Datos informativos Transportista</h1>

                                                </Tab.Pane>
                                                <Tab.Pane eventKey="#link2">
                                                    <Card>
                                                        <h1>Mis Viajes</h1><Button variant='secondary'>Buscar Nueva Licitacion</Button>
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