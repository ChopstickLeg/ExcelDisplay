import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UploadFile from './UploadFile';
import DisplayData from './DisplayData';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UploadFile />} />
        <Route path="/display" element={<DisplayData />} />
      </Routes>
    </Router>
  );
};

export default App;
