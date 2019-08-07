import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Login from './pages/Login';
import Main from './pages/Main';

/**
 * Os componentes utilizados em nossas Routes recebem por padrão um objeto chamado history
 * que serve para fazer a navegação. Veja, por exemplo lá no componente Login
 */

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login} />
            <Route path="/main" component={Main} />
        </BrowserRouter>
    );
}