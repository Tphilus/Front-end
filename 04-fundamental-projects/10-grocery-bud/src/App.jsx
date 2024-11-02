import { useState } from "react";
import Form from "./components/Form";
import { nanoid } from "nanoid";
import Items from "./components/Items";

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items))
}

const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    setItems([...items, newItem]);
  };

  const removeItem = (itemId) => {
    const newItem = items.filter((item) => item.id !== itemId);
    setItems(newItem)
  };

  return (
    <section className="section-center">
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} />
    </section>
  );
};

export default App;
