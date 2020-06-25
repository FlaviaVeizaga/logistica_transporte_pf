import React from 'react';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import history from '../../config/history';

class MenuDadorCarga extends React.Component{

    render(){
        return(
            <Navbar bg="dark" variant="dark" style={{ maxWidth: '100%' }}>
                <Navbar.Brand href="/DadorCarga/Home">Home</Navbar.Brand>
                <Form inline>
                    <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-light">Search</Button>
                    <Button variant='dark' onClick={()=>{history.push('/')}}> Logout </Button>
                </Form>
            </Navbar>
        )
    }
}

export default MenuDadorCarga;