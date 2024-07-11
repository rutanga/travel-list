import React from "react";

export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentagePacked =
    numItems > 0 ? Math.round((numPacked / numItems) * 100) : 0;

  return (
    <footer className="stats">
      <em>
        {percentagePacked === 100
          ? "You have got everything ready to go! ✈️"
          : `👜 You have ${numItems} items on your list, and you already packed ${numPacked} (${percentagePacked}%)`}
      </em>
    </footer>
  );
}
