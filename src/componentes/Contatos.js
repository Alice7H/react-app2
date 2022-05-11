import React, { useState } from 'react'

const Contatos = () => {
    const [Nome, setNome] = useState('Ana');
    
    return(
        <div>
           <h1> Contatos</h1>
            <div>
                <p> O meu nome é {Nome}</p>
                <button onClick={() => setNome('Aline')}>Alterar</button>
            </div>

        </div>
    )
}

export default Contatos;