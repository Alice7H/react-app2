import React, { Component } from 'react';
import Navegacao from './componentes/Navegacao';
import Home from './componentes/Home';
import Servicos from './componentes/Servicos';
import Contatos from './componentes/Contatos';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component {
  render(){
    return(
      <Router>
        <div>
          <Navegacao />
            <Switch>
              <Route exact path="/"><Home /></Route>
              <Route path="/servicos"><Servicos /></Route>
              <Route path="/contatos"><Contatos /></Route>
            </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
