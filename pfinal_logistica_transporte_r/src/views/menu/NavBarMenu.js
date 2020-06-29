import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import history from '../../config/history'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'


class NavBarMenu extends React.Component {





    render() {
        return (

            <Navbar bg="dark" variant="dark" style={{ maxWidth: '100%' }}>
                <Nav className="mr-auto">
                    <Nav.Link href="/Perfil/">Perfil</Nav.Link>
                </Nav>

                <DropdownButton
                 bg="dark" variant="dark"
                    alignRight
                    title="Cuentas"
                    id="dropdown-menu-align-center"
                >
                    <Dropdown.Item href="/Perfil" onClick={(e)=>{window.localStorage.setItem('perfil','Principal')}}>Cuenta Principal</Dropdown.Item>
                    <Dropdown.Item href="/Perfil"  onClick={(e)=>{window.localStorage.setItem('perfil','Transporte')}}>Cuentas Transporte</Dropdown.Item>
                    <Dropdown.Item href="/Perfil"  onClick={(e)=>{window.localStorage.setItem('perfil','Dador')}}>Cuentas de Cargas</Dropdown.Item>
                    <Dropdown.Item href="/Perfil"  onClick={(e)=>{window.localStorage.setItem('perfil','Invitado')}}>Cuentas de Invitado</Dropdown.Item>
                    <Dropdown.Divider />
                    <Button variant='dark' style={{ marginLeft: '10px' }} onClick={() => {
                       window.localStorage.removeItem('id');
                       history.push('/')

                    }}> Logout </Button>

                </DropdownButton>
                <Form inline>
                    {/*
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />

                        <Button variant="outline-light">Search</Button>
                    */}
                </Form>
            </Navbar>
        )
    }
}
export default NavBarMenu;