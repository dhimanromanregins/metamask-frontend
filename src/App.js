import './App.css';
import Home from './Components/Home';
import Info from './Components/Info';             
import Register from './Components/Register';
import SecurityLogin from './Components/SecurityLogin';
import SecureWallet from './Components/SecureWallet';
import ConfirmPhrases from './Components/ConfirmPhrases';
import CreatePassword from './Components/CreatePassword';
import ConfirmSecretPhrase from './Components/ConfirmSecretPhrase';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';

function App() {
  const [pageUrl, setPageUrl] = useState('/register');

  const updatePageUrl = (url) => {
    setPageUrl(url);
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home updatePageUrl={updatePageUrl} />} />
        <Route path="/info" element={<Info pageUrl={pageUrl} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/security-login" element={<SecurityLogin />} />
        <Route path="/secure-wallet" element={<SecureWallet />} />
        <Route path="/confirm-phrases" element={<ConfirmPhrases />} />
        <Route path="/create-password" element={<CreatePassword />} />
        <Route path="/confirm-secret-phrase" element={<ConfirmSecretPhrase />} />
      </Routes>
    </Router>
  );
}

export default App;
