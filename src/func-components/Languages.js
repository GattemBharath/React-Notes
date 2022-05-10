import React, { useState, useEffect } from "react";
import "bootswatch/dist/materia/bootstrap.min.css";
import { v4 as uuidv4 } from "uuid";
import InputHook from "./InputHook";

const Languages = () => {
  const [counter, setCounter] = useState(5);

  const [lang, setLang] = useState([
    { id: 1, name: "Python", email: "abc@abc.co" },
    { id: 2, name: "NodeJS", email: "abc@abc.co" },
    { id: 3, name: "ReactJS", email: "abc@abc.co" },
    { id: 4, name: "Java", email: "abc@abc.co" },
  ]);

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Use Effect Run");
  }, [count]);

  //   const [name, setName] = useState("");
  const [name, setName, clearName] = InputHook("");
  const [email, setEmail, clearEmail] = InputHook("");

  //   const inputHandle = (e) => {
  //     e.preventDefault();
  //     setName(e.target.value);
  //   };

  const addLanguage = (e) => {
    e.preventDefault();
    setCounter(counter + 1);
    setLang([...lang, { id: counter, name: name, email: email }]);
    // setName("");
    clearName();
    clearEmail();
  };

  return (
    <>
      <h1>{count}</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {lang.map((lan) => (
            <tr key={lan.id}>
              <td>{lan.id}</td>
              <td>{lan.name}</td>
              <td>{lan.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <form onSubmit={addLanguage}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={setName}
            placeholder="Add Language..."
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={setEmail}
            placeholder="Email..."
          />
        </div>
        <br />
        <div className="form-group">
          <input
            type="submit"
            className="btn btn-primary"
            value="Add Language"
          />
        </div>
      </form>
      <br />
      <div className="form-group">
        <input
          type="submit"
          value="Count"
          className="btn btn-info"
          onClick={() => setCount(count + 1)}
        />
      </div>
    </>
  );
};

export default Languages;
