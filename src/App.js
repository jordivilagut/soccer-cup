import React from 'react';
import {Route, Switch} from 'react-router-dom'
import {MainMenu} from "./pages/MainMenu";
import {Games} from "./pages/Games";
import {Standings} from "./pages/Standings";

export const App = () => (
    <div>
      <header>
        <h1>Covid Cup 2020</h1>
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={MainMenu}/>
          <Route exact path="/games" component={Games}/>
          <Route exact path="/standings" component={Standings}/>
        </Switch>
      </main>
    </div>
);
