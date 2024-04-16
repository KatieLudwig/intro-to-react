import React, { useState } from 'react'

export default function Character({ person, planets }) { 
   // ❗ Create a state to hold whether the homeworld is rendering or not
  const [showHomeworld, setShowHomeworld] = useState(false);


  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const toggleHomeworld = () => {
    // console.log('Character card clicked. Homeworld:', homeworld)
    setShowHomeworld((prevShowHomeworld) => !prevShowHomeworld);
    };
  
  const homeworld = planets.find(planet => planet.id === person.homeworld)
  // console.log(planets);
  // console.log(person);
  // console.log(homeworld);

  // console.log('homeworld object:', homeworld);
  // console.log('homeworld name:', homeworld?.name)
  // ❗ Add the props
  
  return (
    <div onClick={toggleHomeworld} className='character-card'>
      <h3 className='character-name'>{person.name}</h3>
      {showHomeworld && homeworld && (
        <p> Planet:
          <span className='character-planet'> {homeworld.name}</span>
        </p>
      )}
      {/* Use the same markup with the same attributes as in the mock */}
    </div>
  )
}


