import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Beerlist from "./components/Beerlist";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     
      <Header />
      <Beerlist/>
    </>
  );
}

export default App;
