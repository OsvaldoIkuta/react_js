import React, { Component } from 'react';
import { Button, Input } from 'reactstrap'

import { setAutenticado } from '../utils/LoginManager'

import { Prompt } from 'react-router-dom'

class LoginPage extends Component {
    state = {}

    onLoginClick = () => {
        this.setState(
            {
                usuario: '',
                senha: ''
            },
            () => {
                setAutenticado(true);
                this.props.history.push('/');
            }
        )
    }

    onInputChange = event => {
        const { name, value } = event.target
        //console.log(name, value);
        this.setState({
            [name]: value
        })
    }
    render() {
        const { usuario, senha } = this.state;
        const bloquearNavegacao = Boolean(usuario || senha);
        return (
            <div>
                <h1>Login</h1>
                <Prompt
                    when={bloquearNavegacao}
                    message='Deseja sair da tela de login?'
                />
                <Input type="text" name="usuario" onChange={this.onInputChange} placeholder="Usuário"></Input>
                <Input type="password" name="senha" onChange={this.onInputChange} placeholder="Senha"></Input>
                <Button onClick={this.onLoginClick}> Entrar</Button>
            </div>
        )
    }
}

export default LoginPage;