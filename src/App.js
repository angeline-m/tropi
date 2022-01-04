import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import firebaseApp from './firebase/firebaseConfig';

import HomePage from './pages/HomePage';
import Dashboard from './pages/dashboard/Dashboard';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route exact path="/dashboard" element={<Dashboard/>}/>
          <Route exact path="*" element={<PageNotFound/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
