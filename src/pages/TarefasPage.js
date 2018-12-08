import React, { Component } from 'react';

import {Link, Route} from 'react-router-dom'

const TAREFAS = [{
    id: 1,
    titulo: "Aprender Inglês",
    descricão: "Inglês Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
},
{
    id: 2,
    titulo: "Aprender Francês",
    descricão: "Farncês Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
},
{
    id: 3,
    titulo: "Aprender Nihongo",
    descricão: "Nohongo Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
},
]

class TarefasPage extends Component {
    render() {

        const tarefasLinks = TAREFAS.map((tarefa, index) => { // array de <li>
            return (<li key={tarefa.id}><Link to={'/tarefas/' + tarefa.id }>{tarefa.titulo}</Link></li>)
            //return (<li><Link to={`/tarefas/{$tarefa.id}` }>{tarefa.titulo}</Link></li>)
            
        })
        return (
            <div>
                <h1>Tarefas</h1>

                <ul>
                    { 
                        tarefasLinks
                    }
                </ul>
                <Route path="/tarefas/:tarefaId" render={props => {
                                                                const tarefaId = props.match.params.tarefaId;
                                                                const tarefa = TAREFAS.find(tar => tar.id == tarefaId);
                                                                return (
                                                                    <div>
                                                                        { tarefa.descricão}
                                                                    </div>
                                                                )
                }}></Route>
            </div>
        )
        
    }
}

export default TarefasPage;