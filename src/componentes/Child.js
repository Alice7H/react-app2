import React, { Component } from 'react'

export default class Child extends Component {

    Alterar = () => {
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
