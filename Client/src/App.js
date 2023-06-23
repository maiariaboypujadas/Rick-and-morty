import './App.css';
import Cards from './components/Cards/Cards.jsx';
import style from './App.module.css';
import NavBar from './components/NavBar/NavBar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About  from './components/About/About';
import Detail from './components/Detail/Detail';
import Forms from './components/Form/Form';
import Favorites from './components/Favorites';

const EMAIL = 'maiariaboy24@gmail.com';
const PASSWORD = '123asd';

function App() {
  const [characters, setCharacters] = useState([]);
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  
  // function login(userData) {
  //    if (userData.password === PASSWORD && userData.email === EMAIL) {
  //       setAccess(true);
  //       navigate('/home');
  //    }
  // }
  async function login(userData) {
try {
  const { email, password } = userData;
  const URL = 'http://localhost:3001/rickandmorty/login/';
  const {data} = await axios(URL + `?email=${email}&password=${password}`)
     const { access } = data;
     setAccess(data);
     access && navigate('/home');
  
} catch(error){
  console.log(error);
}
}

  useEffect(() => {
    !access && navigate('/');
 }, [access]);

  async function onSearch(id) {
    try {
    const response = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
    const data = response.data;
       if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
       } else {
          window.alert('¡No hay personajes con este ID!');
       }
  } catch(error){
    console.log(error);
  }
 };
 const onClose = (id) => {
  setCharacters(
    characters.filter(char => 
      char.id !== Number(id)))
 };
 function randomHandler() {
   let haveIt = [];
   //Generate random number
   let random = (Math.random() * 826).toFixed();

   //Coerce to number by boxing
   random = Number(random);

   if (!haveIt.includes(random)) {
     haveIt.push(random);
     fetch(`https://rickandmortyapi.com/api/character/${random}`)
       .then((response) => response.json())
       .then((data) => {
         if (data.name) {
           setCharacters((oldChars) => [...oldChars, data]);
         } else {
           window.alert("No hay personajes con ese ID");
         }
       });
   } else {
     console.log("Ya agregaste todos los personajes");
     return false;
   }
 }
     return (
   <div className={style.App}>
    {pathname !== "/" && <NavBar onSearch={onSearch} random={randomHandler}/>}
    <Routes>
      <Route path='/' element={<Forms login={login}/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/home' element={
      <Cards characters={characters} onClose={onClose}/>}/> 
      <Route path='/detail/:id' element={<Detail/>}/>
      <Route path='/favorites' element={<Favorites/>}></Route>
    </Routes>
      </div>
   );
}

export default App;
