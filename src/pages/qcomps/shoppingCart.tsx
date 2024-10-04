import { useState } from 'react';

export default function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  // async function handleClick() {
  //   setPending(pending + 1);
  //   await delay(3000);
  //   setPending(pending - 1);
  //   setCompleted(completed + 1);
  // }

  // Updated handleClick function to use arrow function for variables
  async function handleClick() {
    setPending(pending => pending + 1);
    await delay(2000);
    setPending(pending => pending - 1);
    setCompleted(completed => completed + 1);
  }

  return (
    <>
      <h1>Shopping Cart</h1>
      <h3>
        Pending: {pending}
      </h3>
      <h3>
        Completed: {completed}
      </h3>
      <button onClick={handleClick}>
        Buy
      </button>
      <div></div>
    </>
  );
}

function delay(ms: number) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}