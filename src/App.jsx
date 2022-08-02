import * as React from "react";
import "./App.css";
import { Header } from "./components/molecules/header/header";
import Bingo from "./components/pages/bingo";
import Registration from "./components/pages/registration";

function App() {
  return (
    <div className="App">
      <Bingo />
      <Header />
      <Registration />
    </div>
  );
}

export default App;
