import React, { Component } from 'react';

import { Alert, Button } from 'reactstrap';

import Artigo from '../components/Artigo'
import Contador from '../components/Contador'

class HomePage extends Component {
    render() {
        return (
            <div>

            <div className="App">
                <Button color="danger">Clique Aqui</Button>
        
                <Alert color="primary"> Olá Mundo </Alert>

                <Artigo nome="Osvaldo" texto="Introdução ao React Js" />
                <Artigo nome="João" texto="BURRO" />


                <Contador tempo={1000} />
                <Contador numero={300} />
        

            </div>
            
            </div>
        )
            
        
        
    }
}

export default HomePage;