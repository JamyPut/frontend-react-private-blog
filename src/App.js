import React, { useState } from 'react';
import './App.css';
import {Link, Route, Switch} from "react-router-dom";
import HomePage from "./pages/home";
import LoginPage from "./pages/login"
import BlogPost from "./pages/blogpost"
import BlogOverview from "./pages/blogoverview"
import NavBar from "./components/NavBar";
function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated ] = useState(false);

  return (
      <>
          <header>
              <NavBar/>
          </header>
          <Switch>
              <Route exact path={"/"}>
                  <HomePage/>
              </Route>
              <Route exact path={"/login"}>
                  <LoginPage/>
              </Route>
              <Route exact path={"/blogpost/:id"}>
                  <BlogPost/>
              </Route>
              <Route exact path={"/blogoverview"}>
                  <BlogOverview/>
              </Route>
          </Switch>
      </>
  );
}

export default App;
