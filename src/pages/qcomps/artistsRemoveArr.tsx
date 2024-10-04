import { useState } from 'react';

// An array of objects where each has an id
let initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye'},
  { id: 2, name: 'Louise Nevelson'},
];

export default function List() {
  const [artists, setArtists] = useState(
    initialArtists
  );

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>
            {artist.name}{' '}
            <button onClick={() => { 
              setArtists(
                artists.filter(a => a.id !== artist.id
                )
              );}}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
