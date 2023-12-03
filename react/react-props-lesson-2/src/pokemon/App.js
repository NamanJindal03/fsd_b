import { useState, useEffect } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import CardList from "./components/CardList";
import Modal from "./components/Modal";

const INITIAL_API = 'https://content.newtonschool.co/v1/pr/64ccef982071a9ad01d36ff6/pokemonspages1';
const MOCK_DATA =  [
    {
        "id": 147857349872872343,
        "name": "namaan",
        "type": "bug2222",
        "stats": [
            {
                "base_stat": 508475874,
                "effort": 4,
                "stat": {
                    "name": "hp",
                    "url": "https://pokeapi.co/api/v2/stat/1/"
                }
            },
            {
                "base_stat": 20,
                "effort": 0,
                "stat": {
                    "name": "attack",
                    "url": "https://pokeapi.co/api/v2/stat/2/"
                }
            },
            {
                "base_stat": 55,
                "effort": 2,
                "stat": {
                    "name": "defense",
                    "url": "https://pokeapi.co/api/v2/stat/3/"
                }
            },
            {
                "base_stat": 25,
                "effort": 0,
                "stat": {
                    "name": "special-attack",
                    "url": "https://pokeapi.co/api/v2/stat/4/"
                }
            },
            {
                "base_stat": 25,
                "effort": 0,
                "stat": {
                    "name": "special-defense",
                    "url": "https://pokeapi.co/api/v2/stat/5/"
                }
            },
            {
                "base_stat": 30,
                "effort": 0,
                "stat": {
                    "name": "speed",
                    "url": "https://pokeapi.co/api/v2/stat/6/"
                }
            }
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/11.svg",
        "height": 7,
        "weight": 99
    },
    {
        "id": 31,
        "name": "nidoqueen",
        "type": "poison",
        "stats": [
            {
                "base_stat": 90,
                "effort": 3,
                "stat": {
                    "name": "hp",
                    "url": "https://pokeapi.co/api/v2/stat/1/"
                }
            },
            {
                "base_stat": 92,
                "effort": 0,
                "stat": {
                    "name": "attack",
                    "url": "https://pokeapi.co/api/v2/stat/2/"
                }
            },
            {
                "base_stat": 87,
                "effort": 0,
                "stat": {
                    "name": "defense",
                    "url": "https://pokeapi.co/api/v2/stat/3/"
                }
            },
            {
                "base_stat": 75,
                "effort": 0,
                "stat": {
                    "name": "special-attack",
                    "url": "https://pokeapi.co/api/v2/stat/4/"
                }
            },
            {
                "base_stat": 85,
                "effort": 0,
                "stat": {
                    "name": "special-defense",
                    "url": "https://pokeapi.co/api/v2/stat/5/"
                }
            },
            {
                "base_stat": 76,
                "effort": 0,
                "stat": {
                    "name": "speed",
                    "url": "https://pokeapi.co/api/v2/stat/6/"
                }
            }
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/31.svg",
        "height": 13,
        "weight": 600
    }
]
const App = () => {
    const [apiEndPoint, setApiEndPoint] = useState(INITIAL_API);
    const [pokemonData, setPokemonData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState({});
    
    async function getPokemonData(endpoint){
        const response = await fetch(endpoint);
        const pokemonData = await response.json();
        setApiEndPoint(pokemonData[0].next);

        const promisePokemonArray = pokemonData[0].results.map((pokemon)=>{
            return fetch(pokemon.url)
        })
        let inidividualPokemonArrayResponse = await Promise.all(promisePokemonArray);
        inidividualPokemonArrayResponse = inidividualPokemonArrayResponse.map((pokemonResponse)=>{
            return pokemonResponse.json();
        })
        const inidividualPokemonArrayData = await Promise.all(inidividualPokemonArrayResponse);
        const finalPokemonArrayData = inidividualPokemonArrayData.map((pokemonArr)=>{
            return pokemonArr[0]
        })
        setPokemonData((prev)=>{
            return [...prev, ...finalPokemonArrayData];
        })
    }

    function handleFetchMorePokemons(){
        getPokemonData(apiEndPoint);
    }

    function closeModal(){
        setShowModal(false)
    }
    function handleModalAppearance(data){
        setModalData(data);
        setShowModal(true);
    }


    useEffect(()=>{
        getPokemonData(apiEndPoint);
        // setPokemonData(MOCK_DATA);
    },[])
    return (
        <div>
            {/* <section>
                {pokemonData.map((pokemon)=>{
                    return (<div>
                        {pokemon.name}
                    </div>)
                })}
            </section>
            <Button content={"Know More..."} theme={"normal"} title={'sample'} disabled={true}/>
            <Button content={"Know More..."} theme={"grass"} title={'sample2'} disabled={false}/>
            <Button  theme={"grass"} title={'sample2'} disabled={false}/>
            <Card theme={"normal"}/> */}
            <CardList pokemonData={pokemonData} handleModalAppearance={handleModalAppearance}/>

            <button onClick={()=> setShowModal(true)}>Invoke Modal</button>
            <Modal show={showModal} closeModal={closeModal} data={modalData}/>

            {apiEndPoint && <button onClick={handleFetchMorePokemons}>Get More Pokemons</button>}
        </div>
    )
}

export default App;
