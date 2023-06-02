import { Link, useNavigate } from 'react-router-dom';
import style from './Card.module.css';


export default function Card(props) {
   
   return (
      <div className='cards'>
         <Link to={`/detail/${props.id}`}>

         <div className='face front'>
     <img src={props.image} alt=""/>
         </div>
         <div className='face back'>
     <p>Name: {props.name}</p>
     <p>Status:{props.status} </p>
     <p>Species: {props.species}</p>
     <p>Gender: {props.gender}</p>
     <p>Origin: {props.origin}</p>
     <button onClick={() => {props.onClose(props.id)}}>X</button>
         </div>
         </Link>
      </div>
   );
   }
