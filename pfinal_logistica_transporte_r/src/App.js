import React from 'react';
import './App.css';
import { Router, Switch, Route } from 'react-router-dom';
import browserHistory from './config/history'
import Login from './views/login/Login'
import Home from './views/home/Home'
import ChangePassword from './views/changepassword/ChangePassword'
import Register from './views/register/Register'
import Tienda from './views/Tienda/Tienda';
import FormularioTienda from './views/Formularios/FormularioTienda';
import FormularioTransporte from './views/Formularios/FormularioTransporte';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Transporte</h1>
        </header>

        <Router history={browserHistory}>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/Home' component={Home} />
            <Route path='/ChangePassword' component={ChangePassword} />
            <Route path='/Register' component={Register} />
            <Route path='/Tienda' component={Tienda} />
            <Route path='/FormularioTienda' component={FormularioTienda} />
            <Route path='/FormularioTransporte' component={FormularioTransporte} />

          </Switch>
        </Router>

      </div>
    );
  }
}

export default App;