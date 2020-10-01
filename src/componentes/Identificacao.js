import React, { Component } from 'react'

export default class Identificacao extends Component {
    render() {
        return (
            <div>
                <p>Identificação</p>
                <p>Nome: {this.props.nome}</p>
                <p>Sobrenome: {this.props.sobrenome}</p>
            </div>
        )
    }
}
