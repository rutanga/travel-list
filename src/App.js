import React, { useState } from "react";
import Logo from "./Components/logo";
import Form from "./Components/form";
import PackingList from "./Components/packingList";
import Stats from "./Components/stats"

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
    console.log(id);
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) => item.id === id ? { ...item, packed: !item.packed } : item)
    );
  }

  function handleClearList() {
    const confirmed = window.confirm("Are you sure you want to delete all the items on the list?");
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList} />
      <Stats items={items} />
    </div>
  );
}





