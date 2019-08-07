import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // para link

import api from '../services/api';

import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import deslike from '../assets/dislike.svg';

import './Main.css';

export default function Main({ match }) {
    const [ users, setUsers ] = useState([]);// inicia com array vazio pois iremos acrescentar vários usuários

    /**
     * useEffect() irá fazer com que a função (1º parâmetro) seja executado
     * quando determinadas variáveis listadas no segundo parâmetro for alterada.
     * Se passarmos o segundo parâmetro em branco (array vazio ou []) a função
     * será somente executada logo que o componente for carregado.
     * 
     * [match.params.id] => toda vez que este for alterado, será executada a função
     * 
     * Vamos fazer com que sejam carregados os devs que este usuário ainda não deu
     * like / deslike
     */
    useEffect(() => { 
        /**
         * As boas práticas do React diz que não se pode adicionar async/await
         * diretamente em useEffect(), por isso vamos adicionar outra função
         * que possamos adicionar o async/await
         */
        async function loadUsers(){
            const response = await api.get('/devs', { 
                headers: { 
                    user:  match.params.id
                }
             })

            // armazenando em users
            setUsers(response.data);
        };

        loadUsers();
     }, [match.params.id]);

    async function handleLike(id) {
        await api.post(`/devs/${id}/likes`, null, {
            headers: { user: match.params.id }
        });

        // Agora vamos remover da listagem o usuário que demos o like/deslike
        setUsers(users.filter(user => user._id !== id));
    }

    async function handleDeslike(id) {
        await api.post(`/devs/${id}/deslikes`, null, {
            headers: { user: match.params.id }
        });

        // Agora vamos remover da listagem o usuário que demos o like/deslike
        setUsers(users.filter(user => user._id !== id));
    }

    return (
        <div className="main-container">
            <Link to="/">
                <img src={logo} alt="TinDev" />
            </Link>
            <ul>
                { users.length > 0 ? (
                    users.map(user => (
                        <li key={user._id}>
                            <img src={user.avatar} alt=""/>
                            <footer>
                                <strong>{user.name}</strong>
                                <p>{user.bio}</p>
                            </footer>
    
                            <div className="buttons">
                                <button type="button" onClick={() => handleDeslike(user._id)}>
                                    <img src={deslike} alt="Deslike"/>
                                </button>
                                <button type="button" onClick={() => handleLike(user._id)}>
                                    <img src={like} alt="Like"/>
                                </button>
                            </div>
                        </li>
                    ))
                ) : (
                    <div className="empty">Acabou :(</div>
                ) }
            </ul>
        </div>
    )
}