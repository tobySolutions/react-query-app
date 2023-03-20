import React, { useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";
import "./App.css";

function Form() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const { isLoading, isError, error, mutate } = useMutation(createName);

  async function createName() {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/users"
    );
    setMessage(response.data);
  }

  const onChange = (event) => {
    setName(event.target.value);
  };

  const Create = () => {
    mutate({ id: Date.now(), name });
  };
  return (
    <>
          <div className="">
              <h1>Name</h1>
              <label htmlFor="name">List of names: </label>
              <input type="text" id="name" value={name} onChange={onChange} />
              <button onClick={Create}>Create</button>
              <p>Created a new Name ID: {message && message.id}</p>

              <div className="">
                  {isLoading ? "updating..." : ""}
                  {isError ? error.message : ""}
              </div>
      </div>
    </>
  );
}

export default Form;
