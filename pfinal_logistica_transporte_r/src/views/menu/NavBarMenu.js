import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import history from '../../config/history'

class NavBarMenu extends React.Component {

    render() {
        return (
            
            <Navbar bg="dark" variant="dark" style={{ maxWidth: '100%' }}>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/Tienda">Tiendas</Nav.Link>
                    <Nav.Link href="/FormularioTienda">FormulariosTienda</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-light">Search</Button>
                    <Button variant='dark' onClick={()=>{history.push('/')}}> Logout </Button>
                </Form>
            </Navbar>
        )
    }
}
export default NavBarMenu;