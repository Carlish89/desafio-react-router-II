import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Picachu from "./Picachu.png"


const Home = () => {

    const [id, setId] = useState("");
    const navigate = useNavigate();
    const irAPersonajes = () => {
        navigate(`/pokemon/${id}`)
    }
    return (
        <div className="mt-5">
            <h1>FIND YOUR POKEMON</h1>
            <div className='imagen' style={{backgroundImage: `url(${Picachu})`}}></div>
            <select placeholder='4' name="selector" id="1" onChange={({ target }) => setId(target.value)}>
                <option value="1">Bulbasaur</option>
                <option value="2">Ivisaur</option>
                <option value="3">Venusaur</option>
                <option value="4">Charmander</option>
                <option value="5">Charmeleon</option>
                <option value="6">Charizard</option>
                <option value="7">Squirtle</option>
                <option value="8">Wartourtle</option>
                <option value="9">Blastois</option>
                <option value="10">Caterpie</option>
            </select>
            <button onClick={irAPersonajes}>buscar</button>
        </div>
    )
}

export default Home
