import { useState } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
import Items from "./Items";
import { ToastContainer, toast } from "react-toastify";

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    list = JSON.parse(localStorage.getItem('list'))
  }
  else {
    list = [];
  }
  return list;
}

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items));
}

const App = () => {
  let [items, setItems] = useState(getLocalStorage());

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    }
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('Successfully added to the list')
  }

  const removeItem = (itemId) => {
    const newItemsList = items.filter((item) => item.id !== itemId);
    setItems(newItemsList);
    setLocalStorage(newItemsList);
    toast.success('Removed Item from List')
  }
  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('Completed!')
  };

  return <section className="section-center">
    <Form addItem={addItem} />
    <ToastContainer position="top-center"/>
    <Items items={items} removeItem={removeItem} editItem={editItem}/>
  </section>
};

export default App;
