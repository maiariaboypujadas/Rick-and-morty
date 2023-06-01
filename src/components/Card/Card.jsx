import style from './Card.module.css';

export default function Card(props) {
   return (
      <div className='cards'>
         <div className='face front'>
     <img src={props.image} alt=""/>
         </div>
         <div className='face back'>
     <p>Name: {props.nombre}</p>
     <p>Status:{props.status} </p>
     <p>Species: {props.species}</p>
     <p>Gender: {props.gender}</p>
     <p>Origin: {props.origin}</p>
     <button onClick={props.onClose}>X</button>
         </div>
      </div>
   );
   }
