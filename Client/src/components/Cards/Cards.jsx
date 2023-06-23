import Card from '../Card/Card';

export default function Cards(props) {
   const { characters, onClose } = props;
   

  return (
    <div>
    {
      characters?.map((character) => (
        <Card
        id={character.id}
        key= {character.id}
         name= {character.name}
         status= {character.status}
         species= {character.species}
         origin= {character.origin.name}
         gender= {character.gender}
         image={character.image} 
         onClose={onClose}
         />
         
      ))
    }
      </div>
    )}

