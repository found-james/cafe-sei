import React, { useState } from "react";
import AuthPage from "../AuthPage/AuthPage";

function App() {
  const [user, setUser] = useState();

  return (

    <div className="App">
      <AuthPage setUser={setUser} />
    </div>
  );
}

export default App;
