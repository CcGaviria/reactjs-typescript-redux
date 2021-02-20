import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import { Route, Switch} from "react-router";
import Dashboard from "./pages/dashboard";
import Post from "./pages/post";
import User from "./pages/user";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path={'/'} exact component={Dashboard}/>
        <Route path={'/users/:user'} exact component={User}/>
        <Route path={'/posts/:post'} exact component={Post}/>
      </Switch>
    </HashRouter>
  );
}
export default App;
