import styled from 'styled-components';
import Cards from './components/cards/Cards.jsx';
import './App.css'
import axios from 'axios';
import Nav from './components/nav/Nav.jsx';
import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Home from './components/home/Home.jsx';
import About from './components/about/About.jsx';
import Detail from './components/detail/Detail.jsx';
import Form from './components/form/Form.jsx';
import Favorites from './components/favorites/Favorites.jsx';
import CrearUsuario from './components/crearUsuario/CrearUsuario.jsx';



  // const Titulo = styled.h1`
  //   font-size: 5em;
  //   color: blue;
  //   text-align: center;
  // `
 export const URL = 'http://localhost:3001/rickandmorty/character/'

function App() {
  
  const [characters, setCharacters] = useState([]);
  
  const [access, setAccess] = useState(false);
  const location = useLocation();
  const navigate = useNavigate()


  // const EMAIL = 'josedariorf@gmail.com';
  // const PASSWORD = 'jose1234';

  useEffect(()=>{
    !access && navigate('/');
  }, [access]);

  async function login(userData) {
  const { email, password } = userData;
  const URL = 'http://localhost:3001/rickandmorty/login/';
  try{
    const { data } = await axios(URL + `?email=${email}&password=${password}`);
       const { access } = data;
       console.log(access)
       console.log(data)
       setAccess(data);  
       access && navigate('/home');
   
  }catch(error){throw new TypeError(error)}
}
 
async function reLogin(userDataCrear) {
  const { email, password } = userDataCrear;
  const URL = 'http://localhost:3001/rickandmorty/register/';
  try{
    await axios.post(URL, {email:`${email}`,password:`${password}`});
        window.alert('Usuario Creado')
    //  const { access } = data;
       setAccess(false);  
       access && navigate('/');
   
  }catch(error){throw new TypeError(error)}
}

const handleCrear = (event) => {
  event.preventDefault();
  setAccess(true);
  navigate("/register");
  };
 


  const onSearch = (id) => {
   fetch(`${URL}${id}`)
    .then((response) =>  response.json())
    .then((data) => {
      console.log(data)
      setCharacters([...characters, data]);
    });
  };
  
  
  const onClose = (id) => {
    const charactersFilter = characters.filter((character) => character.id !== id);
    setCharacters(charactersFilter);
  }

  return (
  <>
      <div className='App' >
        {location.pathname !== '/' && location.pathname !== '/register'? <Nav onSearch={onSearch}/> : undefined}
        
        <Routes>
          <Route path='/' element={<Form login={login} handleCrear={handleCrear}/>}/>
          <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/favorites' element={<Favorites/>}/>
          <Route path='/register' element={<CrearUsuario reLogin={reLogin}/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
        </Routes>
      </div> 
      </>
  )
}

export default App
