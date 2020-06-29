import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Tab from 'react-bootstrap/Tab';
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import NavBarMenu from '../menu/NavBarMenu';
import Perfil from './Perfil';

class CuentaPrincipal extends React.Component {

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

   
    handleOnClick() {

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
                                <h1>Informacion de Cuenta</h1>

                                <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                                    <Row>
                                        <Col sm={3}>
                                            <ListGroup>
                                                <ListGroup.Item variant='secondary' action href="#link1">
                                                    Mis Cuentas
                                            </ListGroup.Item>
                                                <ListGroup.Item variant='secondary' action href="#link2">
                                                    Mis invitados
                                            </ListGroup.Item>

                                            </ListGroup>
                                        </Col>
                                        <Col sm={9}>
                                            <Tab.Content>
                                                <Tab.Pane eventKey="#link1">
                                                    <Card>
                                                        <Button variant='secondary' action>Crear Cuenta</Button>
                                                        <Table>
                                                            <thead>
                                                                <tr>
                                                                    <th>NIT</th>
                                                                    <th>Estado de Cuenta</th>
                                                                    <th>Verificado</th>
                                                                    <th>Razon Social</th>
                                                                    <th>Telefono Contado</th>
                                                                    <th>Email Contacto</th>
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
                                                <Tab.Pane eventKey="#link2">
                                                    <Card>
                                                        <Button variant='secondary' action>Crear Invitacion</Button>
                                                        <Table>
                                                            <thead>
                                                                <tr>
                                                                    <th>Nombre</th>
                                                                    <th>Apellido</th>
                                                                    <th>Telefono</th>
                                                                    <th>Email</th>
                                                                    <th>pais</th>
                                                                    <th>Codigo Invitacion</th>
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
export default CuentaPrincipal;