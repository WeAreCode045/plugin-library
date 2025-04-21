import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import UserManager from './components/UserManager';
import SettingsPage from './components/SettingsPage';
import PluginsPage from './components/PluginsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/user-manager" element={<UserManager />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/plugins" element={<PluginsPage />} />
      </Routes>
    </Router>
  );
};

export default App;