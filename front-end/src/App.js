// Este código define o componente principal da aplicação React chamado "App".
// Ele importa estilos e vários componentes, incluindo "Header", "Home", "UserList" e "Footer".
// Utiliza a biblioteca react-router-dom para definir rotas na aplicação.
// O componente "Header" é exibido no topo da página.
// As rotas permitem navegação entre a página inicial ("/") e a lista de usuários ("/userlist").
// O componente "Footer" é exibido na parte inferior da página.
// Por fim, o componente "App" é exportado como padrão para ser utilizado em outras partes do projeto.

// import logo from './logo.svg';
import './Style.css';
import {Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import UserList from './Components/UserList';
import Adduser from './Components/Adduser';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
       <Header /> 
       <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/userlist' element={ <UserList/> } />
        <Route path='/adduser' element={ <Adduser/> } />
       </Routes>
      < Footer />

    </div>
  );
}

export default App;
