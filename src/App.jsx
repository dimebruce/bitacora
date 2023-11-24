import { Fragment } from 'react'
import { useState } from 'react'
import Logbook from './assets/components/Logbook'
import Login from './assets/components/Login'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    // Perform authentication logic (replace this with your actual authentication logic)
    // For simplicity, let's assume the user is authenticated on button click
    setIsAuthenticated(true);
  };

  return (
    <>
      <div>
        {!isAuthenticated ? (
          <Login onLogin={handleLogin} />
        ) : (
          <Logbook />
        )}
      </div>
    </>
  );
}

export default App;