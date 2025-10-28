import { useState } from "react";

import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <>
      <div className="bg-[url('./assets/lichess_logo.png')]  bg-cover bg-no-repeat bg-center grid grid-cols-3 grid-rows-4 gap-2 text-white">
        <Button title="1+0" subtitle="Bullet"></Button>
        <Button title="2+1" subtitle="Bullet"></Button>
        <Button title="3+0" subtitle="Blitz"></Button>
        <Button title="3+2" subtitle="Blitz"></Button>
        <Button title="5+0" subtitle="Blitz"></Button>
        <Button title="5+3" subtitle="Blitz"></Button>
        <Button title="10+0" subtitle="Rapid"></Button>
        <Button title="10+5" subtitle="Rapid"></Button>
        <Button title="15+10" subtitle="Rapid"></Button>
        <Button title="30+0" subtitle="Classical"></Button>
        <Button title="30+20" subtitle="Classical"></Button>
        <Button title="" subtitle="Personalizado"></Button>
      </div>
    </>
  );
}

export default App;
