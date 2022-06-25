import logo from './logo.svg';
import './App.css';
import React from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

//Pages 연결
import Main from "./pages/Main";


function App() {
  return (
    <div className="App">

      <Route>
        <Route path="/" element={<Main />} />
        <main />
        <test />
      </Route>
    </div >
  );
}

export default App;
