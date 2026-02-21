import React, { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import Records from "./components/Records";

const title = "Patient Medical Records";

const App = () => {
  const [record, setRecord] = useState([]);
  const [id, setId] = useState("");
  return (
    <div className="App">
      <h2>{title}</h2>
      <div className="content">
        <Search setRecord={setRecord} setId={setId} id={id} />
        <Records record={record} setRecord={setRecord}/>
      </div>
    </div>
  );
};

export default App;
