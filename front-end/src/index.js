// Este código é a entrada principal de uma aplicação React configurada com React Router. 
// Ele faz o seguinte:
// 1. Importa as bibliotecas necessárias: React, ReactDOM (para manipular o DOM), o componente principal `App` 
//    e o `BrowserRouter` para gerenciar rotas na aplicação.
// 2. Cria uma referência ao elemento HTML com o ID 'root', que será o contêiner para toda a aplicação React.
// 3. Usa o método `ReactDOM.createRoot` para inicializar a renderização da aplicação no modo `React.StrictMode`.
//    Este modo ativa verificações adicionais para garantir boas práticas de programação.
// 4. Envolve o componente `App` no `BrowserRouter` para que o React Router gerencie a navegação entre páginas
//    da aplicação.
// 5. Renderiza a estrutura final dentro do elemento DOM selecionado.

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

