import { useState } from 'react';

export default function Form() {
  const [to, setTo] = useState('Alice');
  const [message, setMessage] = useState('Hello');

  function handleSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault();
    setTimeout(() => {
      alert(`You said ${message} to ${to}`); // React takes a snapshot of the state when the event handler is created, and won't see the updated state because it's referencing the snapshot when it was submitted. 
    }, 5000);
  }
 
  return (
    <form onSubmit={handleSubmit}>
      <label>
        To:{' '}
        <select
          value={to}
          onChange={e => setTo(e.target.value)}>
          <option value="Alice">Alice</option>
          <option value="Bob">Bob</option>
        </select>
      </label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}
