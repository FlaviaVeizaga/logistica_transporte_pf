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
import history from '../../config/history'
import NavBarMenu from '../menu/NavBarMenu';
import Perfil from './Perfil';

class DadorCarga extends React.Component {

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
                                                    Inicio
                                            </ListGroup.Item>
                                                <ListGroup.Item variant='secondary' action href="#link2">
                                                    Viajes
                                            </ListGroup.Item>
                                                <ListGroup.Item variant='secondary' action href="#link3">
                                                    Mis Usuarios
                                            </ListGroup.Item>
                                                <ListGroup.Item variant='secondary' action href="#link4">
                                                    Mis Cuentas
                                            </ListGroup.Item>
                                            </ListGroup>
                                        </Col>
                                        <Col sm={9}>
                                            <Tab.Content>
                                                <Tab.Pane eventKey="#link1">
                                                    <h1>Datos informativos sobre el Dador de Carga</h1>

                                                    <ul>
                                                        <li>Tonelaje Transportado</li>
                                                        <li>Viajes Oferdados</li>
                                                        <li></li>
                                                    </ul>

                                                </Tab.Pane>
                                                <Tab.Pane eventKey="#link2">
                                                    <Card>
                                                        <h1>Viajes Disponibles</h1><Button variant='secondary'>Crear Nuevo Viaje</Button>
                                                        <Table>
                                                            <thead>
                                                                <tr>
                                                                    <th>Origen</th>
                                                                    <th>Destino</th>
                                                                    <th>Tonelaje</th>
                                                                    <th>Estado</th>
                                                                    <th>Datos   Transportista</th>
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
                                                    <h1>Mis Usuarios</h1>

                                                </Tab.Pane>

                                                <Tab.Pane eventKey="#link4">
                                                    <h1>Mis Cuentas</h1>

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

export default DadorCarga