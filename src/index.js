import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css'; // Optional - If you have a separate CSS file for styling




<body>
  <div id="root"></div>
  <script src="index.js"></script>
</body>

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
