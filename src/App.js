import React, { useState } from 'react';
import './App.css';
import {Link, Route} from "react-router-dom";
import HomePage from "./pages/home";
function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated ] = useState(false);

  return (
    <div>
      Maak hier jouw prachtige blog-applicatie!
       <Route exact path={"/"}>
           <HomePage/>
       </Route>
    </div>
  );
}

export default App;
