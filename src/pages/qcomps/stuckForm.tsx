import { useState } from "react";

export default function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  function handleFirstNameChange(e: { target: { value: string; }; }) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e: { target: { value: string; }; }) {
    setLastName(e.target.value);
  }

  function handleReset() {
    setFirstName('');
    setLastName('');
  }

  return (
    <div>
      <h1>(Previously) Stuck Form</h1>
      <form onSubmit={e => e.preventDefault()}>
        <input
          placeholder="First name"
          value={firstName}
          onChange={handleFirstNameChange}
        />
        <input
          placeholder="Last name"
          value={lastName}
          onChange={handleLastNameChange}
        />
        <h2>Hi, {firstName} {lastName}</h2>
        <button onClick={handleReset}>Reset</button>
      </form>
    </div>
  );
}
