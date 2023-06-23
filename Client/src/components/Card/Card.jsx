import { Link } from 'react-router-dom';
//import style from './Card.module.css';
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';


const Card = ({id, name, status, species, gender, origin, image, myFavorites, onClose, addFav, removeFav}) => {
   const [isFav, setIsFav] = useState(false);
   
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         } 
      });
   }, [id, myFavorites]);

   
   
   const handleFavorite = (id, name, status, species, gender, origin, image) => {
      isFav ? removeFav(id, name, status, species, gender, origin, image) : addFav(id, name, status, species, gender, origin, image);
      setIsFav(!isFav); 
   };
   return (
      <div className='cards'>
         { 
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}
     <button onClick= {() => onClose(id)}>X</button>
         <Link to={`/detail/${id}`}>

      <div className='face front'>
     <img 
      src={image}
      alt=""
     />
    </div>
     <div className='face back'>
     <h2>Name: {name}</h2>
     <h2>Status:{status} </h2>
     <h2>Species: {species}</h2>
     <h2>Gender: {gender}</h2>
     <h2>Origin: {origin}</h2>
     
         </div>
         </Link>
      </div>
   );
   }

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => {dispatch(addFav(character))},
      removeFav: (id) => {dispatch(removeFav(id))}
   }
};
const mapStateToProps = (state) => {
   return { 
      myFavorites: state.myFavorites
   }

}
export default connect (mapStateToProps, mapDispatchToProps)(Card);

  