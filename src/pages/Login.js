/**
 * useState servirá para trabalhar com estados
 */
import React, { useState } from 'react';
import './Login.css';
import api from '../services/api';

import logo from '../assets/logo.svg'; // para imagens estáticas, que fazem parte do layoput, temos que importar

export default function Login({ history }) {
    // inicializa com o valor vazio
    // toda vez que preciso setar um novo valor, chamo o setUsername
    // se eu quiser acessar o valor de username, chamo username
    const [username, setUsername] = useState('');

    async function handleSubmit(e) {
        e.preventDefault(); // bloqueia redirecionamento

        const response = await api.post('/devs', {
            // dados do corpo
            username
        });

        const { _id } = response.data;



        history.push(`/dev/${_id}`); // aqui ele vai redirecionar para a rota /main
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="TinDev" />
                <input 
                    placeholder="Digite seu usuário no GitHub"
                    value={username}
                    onChange={e => setUsername(e.target.value)} // quando valor for alterado, seta novo valor
                    />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}
