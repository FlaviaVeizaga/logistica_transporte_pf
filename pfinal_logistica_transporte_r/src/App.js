import React from 'react';
import './App.css';
import { Router, Switch, Route } from 'react-router-dom';
import browserHistory from './config/history'
import Login from './views/login/Login'
import Home from './views/home/Home'
import ChangePassword from './views/changepassword/ChangePassword'
import Tienda from './views/Tienda/Tienda';
import FormularioTienda from './views/Formularios/FormularioTienda';
import FormularioTransporte from './views/Formularios/FormularioTransporte';
import Registro from './views/register/Registro';
import formulariotipo from './views/Formularios/formulariotipo';
import Transportista from './views/TransportistaView/Transportista';
import DadorCarga from './views/DadorCarga/DadorCarga';
import EditarPersona from './views/Formularios/EditarPersona';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Logista Tranporte</h1>
        </header>

        <Router history={browserHistory}>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/Home' component={Home} />
            <Route path='/ChangePassword' component={ChangePassword} />
            <Route path='/Register' component={Registro} />
            <Route path='/Tienda' component={Tienda} />
            <Route path='/FormularioTienda' component={FormularioTienda} />
            <Route path='/FormularioTransporte' component={FormularioTransporte} />
            <Route path='/Tipo/:persona_id' component={formulariotipo} />


            <Route path='/Transportista/Home/:id' component={Transportista} />
            <Route path='/DadorCarga/Home/:id' component={DadorCarga} />

            <Route path='/Personas/Editar/:id' component={EditarPersona}/>


          </Switch>
        </Router>

      </div>
    );
  }
}

export default App;