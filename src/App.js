import './App.css';
import Cards from './components/Cards/Cards.jsx';
import style from './App.module.css';
import NavBar from './components/NavBar/NavBar';
import { useState } from 'react';
import axios from 'axios';
// const example = {
//   id: 1,
//   name: 'Rick Sanchez',
//   status: 'Alive',
//   species: 'Human',
//   gender: 'Male',
//   origin: {
//      name: 'Earth (C-137)',
//      url: 'https://rickandmortyapi.com/api/location/1',
//   },
//   image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
// };
function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
       } else {
          window.alert('¡No hay personajes con este ID!');
       }
    });
 };
 const onClose = (id) => {
  setCharacters(
    characters.filter((char) => {
      return char.id !== Number(id);
    })
  )
 };

     return (
   <div className={style.App}>
    <NavBar onSearch={onSearch}/>
      <Cards characters={characters} onClose={onClose}/>  
      </div>
   );
}

export default App;
