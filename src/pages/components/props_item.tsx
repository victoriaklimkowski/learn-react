import { ItemProps } from "@/types/item";

function Item({ name, isPacked }: ItemProps) {
  // if (isPacked) {
  //   return <li className="item">{name} ✔</li>; // An example of conditional rendering, used extensively in single page apps
  // }
  // return <li className="item"> {name} </li>
  if (isPacked) {
    return <li className="item"> <del>{name}</del></li>; // An example of conditional rendering, used extensively in single page apps
  }
  return <li className="item"> {name} </li>

  // return (
  //   <li className="item">
  //     {isPacked ? 
  //     <del>{name}</del> : name}
  //   </li>
  // );
}

export default function PackingList() {
  return (
    <section>
      <h1>My Packing List</h1>
      <ul>
        <Item
          isPacked={false}
          name="Laptop"
        />
        <Item
          isPacked={true}
          name="Chargers"
        />
        <Item
          isPacked={true}
          name="Socks"
        />
      </ul>
    </section>
  );
}
