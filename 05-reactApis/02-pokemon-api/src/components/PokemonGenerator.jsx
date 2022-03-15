import React, {useState} from "react";

const PokemonGenerator= ()=>{

    let [pokemonList, setPokemonList] = useState([])

    const getPokemonFromApi= ()=>{
        console.log("Getting ready to make an API call from another application")

        fetch("https://pokeapi.co/api/v2/pokemon?limit=1000")
            .then((response)=>{
                return response.json();
            })
            .then((response)=>{
                console.log(response.results)
                setPokemonList(response.results)
            })
            .catch((err)=>{
                console.log("We are having an error ", err)
            })
    }

    return(
        <>
            <div className="mt-5">
                <button onClick={getPokemonFromApi} className="btn btn-secondary">Fetch Pokemon</button>
            </div>
            {
                pokemonList.map((pokeObj, index)=>{
                    return(
                        <div key={index}>
                            <h1><li>{pokeObj.name}</li></h1>
                            <hr />
                        </div>
                    )
                })
            }
        </>
    )
}

export default PokemonGenerator;