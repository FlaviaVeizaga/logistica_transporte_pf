import React from 'react';
import './App.css';
import { Router, Switch, Route } from 'react-router-dom';
import browserHistory from './config/history'
import Login from './views/login/Login'
import ChangePassword from './views/Formularios/ChangePassword'
import Tienda from './views/Tienda/Tienda';
import FormularioTienda from './views/Formularios/FormularioTienda';
import FormularioTransporte from './views/Formularios/FormularioTransporte';
import Registro from './views/Formularios/Registro';
import formulariotipo from './views/Formularios/formulariotipo';
import Transportista from './views/Usuario/Transportista';
import DadorCarga from './views/Usuario/DadorCarga';
import EditarPersona from './views/Formularios/EditarPersona';
import Colaborador from './views/Usuario/Colaborador';
import CuentaPrincipal from './views/Usuario/CuentaPrincipal';
import RegistroInvitado from './views/Formularios/RegistroInvitado';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Logista Tranporte</h1>
        </header>

        <Router history={browserHistory}>
          <Switch>

            {
              window.localStorage.getItem('id') === null && <Route exact path='/' component={Login} />
            }
            <Route path='/Register' component={Registro} />

            {/** Perfiles */}
            {
              window.localStorage.getItem('perfil') === 'Principal' && <Route exact path='/Perfil' component={CuentaPrincipal} />
            }

            {
              window.localStorage.getItem('perfil') === 'Transporte' && <Route exact path='/Perfil' component={Transportista} />
            }

            {
              window.localStorage.getItem('perfil') === 'Dador' && <Route exact path='/Perfil' component={DadorCarga} />
            }

            {
              window.localStorage.getItem('perfil') === 'Invitado' && <Route exact path='/Perfil' component={Colaborador} />
            }

            <Route path='/Formulario/Invitado' component={RegistroInvitado}/>

            <Route path='/ChangePassword' component={ChangePassword} />
            <Route path='/Tienda' component={Tienda} />
            <Route path='/FormularioTienda' component={FormularioTienda} />
            <Route path='/FormularioTransporte' component={FormularioTransporte} />
            <Route path='/Tipo/:persona_id' component={formulariotipo} />



            <Route path='/Personas/Editar' component={EditarPersona} />


          </Switch>
        </Router>

      </div>
    );
  }
}

export default App;