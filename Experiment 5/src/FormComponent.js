import React, { useState } from "react";

function FormComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || email === "") {
      setError("All fields are required");
      return;
    }

    if (!email.includes("@")) {
      setError("Invalid email");
      return;
    }

    setError("");
    setData({ name, email });
  };

  return (
    <div>
      <h2>My Form</h2>

      {error && <p style={{color:"red"}}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <button type="submit">Submit</button>
      </form>

      {data && (
        <div>
          <h3>Submitted Data:</h3>
          <p>Name: {data.name}</p>
          <p>Email: {data.email}</p>
        </div>
      )}
    </div>
  );
}

export default FormComponent;