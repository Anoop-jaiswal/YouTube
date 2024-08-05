import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "flex",
    "ALl",
    "gaming",
    "Songs",
    "Live",
    "Sport",
    "Cricket",
    "Soccer",
    "updated",
    "Latest",
    "Crime",
    "Thriller",
  ];
  return (
    <div className="flex">
      {list.map((name) => (
        <Button name={name} key={name} />
      ))}
    </div>
  );
};

export default ButtonList;
