import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons,setPokemons } from './store/slices/pokemon';




export const Pokemon = () => {
    const { page, pokemon, isLoading } = useSelector((state) => state.pokemons);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getPokemons());
    }, [])
    
  return (
    <>
      <h1>Pokemon</h1>
      <hr />
      <span>{isLoading ? "true" : "false"}</span>

      <ul>
        {pokemon.map((p) => (
          <li key={p.name}>{p.name}</li>
        ))}
      </ul>

      <p>page:{page}</p>
      <button
        onClick={() => dispatch(getPokemons(page))}
        disabled={isLoading}
      >
        next
      </button>
    </>
  );
}
