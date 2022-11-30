import { setPokemons, startLoadingPokemons } from "./pokemonSlice";
import axios from 'axios'

export const getPokemons = (page = 0) => {
  
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());

    //TODO: realziar petición http

    const {data} = await axios.get("https://pokeapi.co/api/v2/pokemon",{params:{limit:10,offset:page*10}});
   const {results} = data;
    console.log(results)
    /*  dispatch(setPokemons) */
    dispatch(setPokemons({
        pokemon:results,
        page:page+1
        
    }));
  };
};
