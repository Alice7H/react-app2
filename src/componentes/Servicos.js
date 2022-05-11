import React, { Component } from 'react'
import '../App.css';
import Identificacao from './Identificacao';
import Child from './Child';

export class Servicos extends Component {
    state = {
        nome: 'Marta',
        sobrenome: 'Silva',
        nome2: 'João'
    }

    Alterar = (novoNome) => {
        this.setState({nome2: novoNome})
    }

    render() {
        return(
            <div>
                <h1>Serviços</h1>
                <h2> CSS em React</h2>
                <p className="cor-texto">Texto da minha aplicação</p>
                <hr />
                <h2>Component com props</h2>
                <Identificacao nome={this.state.nome} sobrenome={this.state.sobrenome}/>
                <hr />

                <div>
                    {/* Parent props to child, child call parent  */}
                    <h3>Parent</h3>
                    <p>Nome: {this.state.nome2}</p>
                    <Child funcaoAlterar={this.Alterar}/>
                    <br/>
                </div>
            </div> 
        )
    }
}

export default Servicos;