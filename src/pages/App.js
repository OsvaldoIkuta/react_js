import React, { Component } from 'react';
import { Container, 
   } from 'reactstrap';

import { HashRouter,
   Route, 
   Switch
  //BrowserRouter, 
  //Link 
} from 'react-router-dom';



import './App.css';
import HomePage from './HomePage';
import SobrePage from './SobrePage';
import TarefasPage from './TarefasPage';
import LoginPage from './LoginPage'

import Menu from '../components/Menu';

import PrivateRoute from '../components/PrivateRoute';



class App extends Component {
  render() {
    return (
      <HashRouter>
          <Container>
              <Menu></Menu>
              <Switch>
                <Route path="/" exact component={HomePage}/>
                <PrivateRoute path="/tarefas" component={TarefasPage}/>
                <Route path="/sobre" component={SobrePage}/>
                <Route path="/login" component={LoginPage}/>
                <Route render={() => {
                    return (
                        <div>
                            <h1>Página não encontrada </h1>
                        </div>
                    );
                  }}
                />
              </Switch>
              
          </Container>
      </HashRouter>
      
     
    )
  }
}

export default App;
