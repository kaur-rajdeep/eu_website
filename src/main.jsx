import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Student from './pages/Student'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Student/>
  </React.StrictMode>
);
