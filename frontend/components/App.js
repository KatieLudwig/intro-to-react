/*
1: Luke Skywalker's name is not in the DOM after first render ✅
2: Luke Skywalker's name renders to the DOM eventually ✅
3: All character cards are rendered with a class of "character-card ✅
4: Character cards have the correct character name ✅
5: Character names are rendered with a class of "character-name ✅
6: Character cards do not render the planets by default ✅
7: Character cards will render their planet after clicking on the card ❌
8: Character cards will hide their planet after clicking again on the card ❌
9: Character planets are rendered with a class of "character-planet ❌
const homeworld = planets.find(planet => planet.url === person.homeworld);
*/



import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

export default function App() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    const fetchData = async () => {
      try{
      const [planets, people] = await Promise.all([
        axios.get(urlPlanets),
        axios.get(urlPeople)
      ])
      setData({ planets: planets.data, people: people.data});
      console.log('Planets data:', planets);
      } catch (error) {
      setError(error.message);
      console.error('Error fetching data:', error)
     }
    };
    fetchData().catch((error) => {
      setError(error.message);
      console.error('error', error)
    })
  }, [])
  // ❗ Create state to hold the data from the API
  // ❗ Create effects to fetch the data and put it in state
  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {data && data.people.map((person, index) => (
        <Character key={index} person={person} planets={data.planets} />
      ))}
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
    </div>
  )
}

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
