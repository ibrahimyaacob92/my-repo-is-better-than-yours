import React from "react";
import { StackInput, StackList } from "./components";
import { RepoProvider } from "./context/RepoContext";
import logo from "./logo.svg";
// import './App.css';

function App() {
  return (
    <RepoProvider>
      <div className="App">
        <StackInput />
        <StackList />
        {/* <History/> */}
      </div>
    </RepoProvider>
  );
}

export default App;
