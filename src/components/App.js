import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import UserList from './UserList';
import UserDetails from './UserDetails';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/users" component={UserList} />
          <Route path="/user/:id" component={UserDetails} />
          {/* Redirect home or unknown paths to /users */}
          <Redirect from="/" to="/users" />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
