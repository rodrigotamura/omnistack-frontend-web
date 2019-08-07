import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Login from './pages/Login';
import Main from './pages/Main';

/**
 * Os componentes utilizados em nossas Routes recebem por padrão um objeto chamado history
 * que serve para fazer a navegação. Veja, por exemplo lá no componente Login
 * 
 * Outro objeto que estes componentes recebem, quandotrabalhados com Route,
 * seria o match, que armazena todos os parâmetros que foram passados para essa rota
 * com o match.params.<parametro>
 * http://localhost:3333/devs/<parametro>
 * Veja o componente Main
 */

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login} />
            <Route path="/dev/:id" component={Main} />
        </BrowserRouter>
    );
}