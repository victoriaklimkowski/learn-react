import { useState } from 'react';

export default function Scoreboard() {
  const [player, setPlayer] = useState({
    firstName: 'John Woodrow',
    lastName: 'Wilson',
    likescore: 10,
  });

  // function handlePlusClick() {
  //   player.likescore++;
  // }

  function handlePlusClick() {
    const newPlayer = { ...player, likescore: player.likescore + 1 };
    setPlayer(newPlayer);
  }

  // function handleFirstNameChange(e: { target: { value: string; }; }) {
  //   setPlayer({
  //     ...player,
  //     firstName: e.target.value,
  //   });
  // }

  // function handleFirstNameChange(e: { target: { value: string; }; }) {
  //   const newPlayer = { ...player, firstName: e.target.value };
  //   setPlayer(newPlayer);
  // }

  // Alternative syntax from Prof. 
  function handleFirstNameChange(e: { target: { value: string; }; }) {
    setPlayer({
      ...player,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e: { target: { value: string; }; }) {
    const newPlayer = { ...player, lastName: e.target.value };
    setPlayer(newPlayer);
  }

  return (
    <>
      <h1>Scoreboard</h1>
      <label>
        Like Score: <b>{player.likescore}</b>
        {'  '}
        <button onClick={handlePlusClick}>
          +1
        </button>
      </label>
      <label>
        First name:
        <input
          value={player.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:
        <input
          value={player.lastName}
          onChange={handleLastNameChange}
        />
      </label>
    </>
  );
}
