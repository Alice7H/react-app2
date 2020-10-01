import React, { Component } from 'react'

export default class Child extends Component {

    Alterar = () => {
       // alterar nome no parent component
       // chamar a função do parent
        this.props.funcaoAlterar('Joana')
    }

    render() {
        return (
            <div>
                <h3>Child</h3>
                <button onClick={this.Alterar}>Alterar</button>
            </div>
        )
    }
}
