// import React, {useState} from 'react';
import React, {Component} from 'react';
// import Identificacao from './componentes/Identificacao'
// import Child from './componentes/Child';
import './App.css'
import Navegacao from './componentes/Navegacao';
import Home from './componentes/Home';
import Servicos from './componentes/Servicos';
import Contatos from './componentes/Contatos';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// const App = () => {

//   const [Nome, setNome] = useState('Ana');
  
//   return(
//     <div>
//       <p> O meu nome é {Nome}</p>
//       <button onClick={() => setNome('Aline')}>Alterar</button>
//     </div>
//   )
// }

class App extends Component{

  // state = {
  //   nome: 'Marta',
  //   sobrenome: 'Silva',
  //   nome2: 'João'
  // }

  // Alterar = (novoNome) => {
  //   this.setState({nome2: novoNome})
  // }

  render(){
    return(
      // <div>
      //   <Identificacao nome={this.state.nome} sobrenome={this.state.sobrenome}/>
      //   <br/>

      // Parent props to child, child call parent 
      //   <h3>Parent</h3>
      //   <p>Nome: {this.state.nome2}</p>
      //   <hr/>
      //   <Child funcaoAlterar={this.Alterar}/>
      //   <br/>

      // CSS in react
      //   <p className="cor-texto">Texto da minha aplicação</p>
      // </div>

      // React router
      <Router>
        <div>
          <Navegacao />
            <Switch>
              <Route exact path="/"> 
                <Home />
              </Route>

              <Route path="/servicos">
                <Servicos />
              </Route>

              <Route path="/contatos">
                <Contatos />
              </Route>
            </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
