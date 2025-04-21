import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import UserManager from './components/UserManager';
import SettingsPage from './components/SettingsPage';
import PluginsPage from './components/PluginsPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/user-manager" component={UserManager} />
        <Route path="/settings" component={SettingsPage} />
        <Route path="/plugins" component={PluginsPage} />
      </Switch>
    </Router>
  );
};

export default App;