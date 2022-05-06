import React from 'react';
import './App.css';
import News from './Pages/News';
import {BrowserRouter as Router ,Route , Routes, Navigate} from 'react-router-dom'

import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Home from './Pages/Home'
import Rnews from './Pages/Rnews'
import PageNotFound from './Pages/PageNotFound'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/rnews" element={<Rnews />} />
          <Route path="/404" element={<PageNotFound />} />
          <Route path="*" element={<Navigate replace to="/404" />}  />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
