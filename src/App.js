
// App.js
import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import RoleTable from './components/RoleTable';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setLoggedIn(true);
  };
  return (
    <div className="App">
      {!loggedIn ? <LoginForm onLoginSuccess={handleLoginSuccess} /> : <RoleTable />}
    </div>
  );
}

export default App;
