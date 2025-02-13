import { useState } from "react";

function ListGroup() {
  const items = ["Sam", "Ram", "Mam"];
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>List Items</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
