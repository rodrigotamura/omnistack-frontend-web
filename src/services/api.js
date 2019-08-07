import axios from 'axios';

/**
 * Configuração inicial
 */

 const api = axios.create({
    baseURL: "http://localhost:3333" // pra não ficar digitando o endereço da nossa API
 });

 export default api;