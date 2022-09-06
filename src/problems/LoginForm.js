import React, { useState } from "react";

export default function LoginForm() {
  const initialFormState = {
    name: "",
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState({ ...initialFormState });

  const [loggedIn, setLoggedIn] = useState("");

  const [error, setError] = useState(false);

  //TODO: allow for checkbox inputs

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setLoggedIn("");
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      setError(true);
      setFormData({ ...initialFormState });
    } else {
      setLoggedIn(formData.name);
      setFormData({ ...initialFormState });
    }
  };

  return (
    <>
      {loggedIn ? (
        <p>Welcome, {loggedIn}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Email:
            <input
              name="email"
              type="text"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Password:
            <input
              name="password"
              type="text"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
          <button type="submit">submit</button>
          <p>{error ? "There was an error" : ""}</p>
        </form>
      )}
    </>
  );
}
