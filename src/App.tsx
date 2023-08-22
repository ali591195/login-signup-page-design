import { useState } from "react";
import Login from "./components/Login";
import MenuBar from "./components/MenuBar";
import Register from "./components/Register";

function App() {
  const [toggleRegister, setToggleRegister] = useState(false);

  return (
    <>
      <MenuBar />
      {toggleRegister ? (
        <Register onLinkClick={() => setToggleRegister(false)} />
      ) : (
        <Login onLinkClick={() => setToggleRegister(true)} />
      )}
    </>
  );
}

export default App;
