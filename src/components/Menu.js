import React from 'react';

import { 
    NavLink,
    NavItem, 
    Nav, 
    Navbar } from 'reactstrap';


    import { //HashRouter,
        //Route, 
       //BrowserRouter, 
       Link, withRouter } from 'react-router-dom'
import { setAutenticado, isAutenticado } from '../utils/LoginManager';

const Menu = (props) => {
    return (
        <Navbar color="light" light expand="md">
              <Nav navbar>
                <NavItem>
                  <Link className="nav-link" to="/">Home</Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/tarefas">Tarefas</Link>
                </NavItem>
                <NavItem>
                <Link className="nav-link" to="/sobre">Sobre</Link>
                </NavItem>
                {isAutenticado() ? (
                  <NavItem>
                    <NavLink onClick={() => {
                                setAutenticado(false);
                                props.history.push('/');
                    }}
                    >
                        Sair
                    </NavLink>
                  </NavItem>
                ): null}
                
              </Nav>
              </Navbar>
              

              

    )
}

export default withRouter(Menu);