import { createSlice } from '@reduxjs/toolkit'

const initialState = {
page:1,
pokemon:[],
isLoading:false
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    startLoadingPokemons:(state) =>{
        state.isLoading = true;
    },
    setPokemons : (state,action) =>{
       state.isLoading = false;
       state.page = action.payload.page;
       state.pokemon = action.payload.pokemon;

    }
  }
});

export const {startLoadingPokemons,setPokemons} = pokemonSlice.actions
