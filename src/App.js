import React from 'react';
import './App.css';
import Routes from './routes';

/**
 * Para passar um valor para um componente, é só adicionar o nome da propriedade
 * neste caso testePropriedade='Olá' dentro do componente Routes, e dentro do componente
 * Routes utilizar:
 * export default function Routes(props) {
        return (
            <h1>{props.testePropriedade}</h1>
        );
    }

    ou usar a desestruturação:
   
    export default function Routes({ testePropriedade }) {
        return (
            <h1>{testePropriedade}</h1>
        );
    }
 */

function App() {
  return (
    <Routes />
  );
}

export default App;
