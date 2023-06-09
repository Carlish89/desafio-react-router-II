import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import { Card } from 'react-bootstrap';

const Personajes = () => {

    const { id } = useParams();
    const [personaje, setPersonaje] = useState([])
    const getPersonajes = async () => {
        const res = await fetch(` https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await res.json()
        const [hp, attack, defence, sAttack, sDefence, speed] = data.stats.map(stat => stat['base_stat'])
        const pokemon = {
            nombre: data.name,
            image: data.sprites.other['official-artwork']['front_default'],
            hp: hp,
            attack: attack,
            defence: defence,
            sAttack: sAttack,
            sDefence: sDefence,
            speed: speed
        }


        console.log(hp, attack)
        setPersonaje(pokemon)
        console.log(personaje)
    }
    useEffect(() => {
        getPersonajes()
    }, [])
    console.log(personaje)



    return (
        <div className="ficha">

            <Card style={{ width: '100vw' }}>

                <Card.Title><h1>{personaje.nombre}</h1></Card.Title>
                <div className='body'>
                <Card.Img variant="top" src={personaje.image} />
                <Card.Body>
                    <Card.Text>
                        <ul>
                        <p>Stats{" "}:</p>
                        <li><p>Hp{" "}:{" "}{personaje.hp}</p></li>
                        <li><p>Attack{" "}:{" "}{personaje.attack}</p></li>
                        <li><p>Defence{" "}:{" "}{personaje.defence}</p></li>
                        <li><p>Special Attack{" "}:{" "}{personaje.sAttack}</p></li>
                        <li><p>Special Defence{" "}:{" "}{personaje.sDefence}</p></li>
                        <li><p>Speed{" "}:{" "}{personaje.speed}</p></li>
                        </ul>
                    </Card.Text>

                </Card.Body>
                </div>
            </Card>

        </div >

    )
}

export default Personajes
