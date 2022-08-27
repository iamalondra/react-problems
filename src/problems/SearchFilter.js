import React, { useState } from "react";
const list = [
  "grapefruit",
  "jellyfish",
  "wombat",
  "glucose",
  "banana",
  "BMW",
  "Joe mama",
];

export default function SearchFilter() {
  const initialFormState = {
    search: "",
  };
  const [formData, setFormData] = useState({ ...initialFormState });

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const searchFilter = (li) =>
    !formData.search || li.toLowerCase().includes(formData.search.toLowerCase());

  return (
    <form>
      <label>
        Search:
        <input
          onChange={handleChange}
          type="text"
          name="search"
          value={formData.search}
        />
        {list.filter(searchFilter).map((li) => (
          <li>{li}</li>
        ))}
      </label>
    </form>
  );
}
