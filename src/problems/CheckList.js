import React, { useState } from "react";

export default function CheckList() {
  //TODO: make list dynamic, add ability to add items,
  //TODO: add a button to clear checked items
  //FIXME: check delete bug
  
  // const toDoList = [
  //   "groceries",
  //   "laundry",
  //   "gardening",
  //   "cooking",
  //   "dishes"
  // ]

  const initialFormState = {
    groceries: false,
    laundry: false,
    gardening: false,
    cooking: false,
    dishes: false,
  };

  const [formData, setFormData] = useState({ ...initialFormState });

  const handleCheck = (event) => {
    // event.preventDefault()
    const { name, checked } = event.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
  };

  const handleClear = () => {
    for (const key in formData) {
      if (formData[key] === true) {
        delete formData[key];
      }
    }
    setFormData({ ...formData });
  };

  const dailyActivities = Object.entries(formData).map(
    ([item, value], index) => (
      <li key={index}>
        <input
          onChange={handleCheck}
          name={item}
          value={value}
          type="checkBox"
        />
        {item}
      </li>
    )
  );
  console.log(formData);
  return (
    <form>
      <ul>{dailyActivities}</ul>
      <button onClick={handleClear} type="button">
        clear
      </button>
    </form>
  );
}
