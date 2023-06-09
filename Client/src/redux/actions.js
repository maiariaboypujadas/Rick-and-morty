import axios from 'axios';
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const ORDER = "ORDER";
export const FILTER = "FILTER";


// export const addFav = (character) => {
//     return{
//      type: ADD_FAV,
//      payload: character
//     }
// }
export const addFav = (character) => {
   try {
      const endpoint = 'http://localhost:3001/rickandmorty/fav';
      return  async (dispatch) => {
       const {data} = await axios.post(endpoint, character)
       
      };
   } catch(error){
      return dispatch({
         type: ADD_FAV,
         payload: data,
      });
   
   }
}

// export const removeFav = (id) => {
//     return {
//         type: REMOVE_FAV,
//         payload: id
//     }
// }
export const removeFav = (id) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
  return (dispatch) => {
     axios.delete(endpoint).then(({ data }) => {
        return dispatch({
           type: REMOVE_FAV,
           payload: data,
     });
     });
  };
};

export const filterCards = (gender) => {
return {
    type: FILTER,
    payload: gender
  }
}
export const orderCards = (orden) => {
return {
    type: ORDER,
    payload: orden
  }
}