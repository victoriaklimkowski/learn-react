import { useState } from 'react';

export default function Form() {
  const [person, setPerson] = useState({
    name: 'Ranjani Shettar',
    artwork: {
      title: 'Aureole',
      city: 'Bangalore',
      image: 'https://i.imgur.com/okTpbHhm.jpg',
    }
  });

  // function handleCityChange(e: { target: { value: string; }; }) {
  //   const nextArtwork = { ...person.artwork, city: e.target.value };
  //   const nextPerson = { ...person, artwork: nextArtwork };
  //   setPerson(nextPerson);
  // }

  // Create a copy of the object in the state
  function handleCityChange(e: { target: { value: string; }; }) {
    // using spread syntax to create a copy of the object for all values excep city
    // this avoids having to specify each property of the object on each line
    const nextArtwork = { ...person.artwork, city: e.target.value };
    // Reconstruct the whole object with the new city value and set it, maintaining the immutability of the object
    const nextPerson = { ...person, artwork: nextArtwork };
    setPerson(nextPerson);
  }


  return (
    <>
      <img src={person.artwork.image}/>
      <label>
        City:
        <input
          value={person.artwork.city}
          onChange={handleCityChange}
        />
      </label>
      <p>
        {person.name}{' '}
        {person.artwork.title}{' '}
        ({person.artwork.city})
      </p>
    </>
  );
}
