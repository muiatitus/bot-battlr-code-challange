import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BotCollection from './components/BotCollection'; // Update the import path
import YourBotArmy from './components/YourBotArmy'; // Update the import path
import BotSpecs from './components/BotSpecs'; // Update the import path

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Bot Collection</Link>
          </li>
          <li>
            <Link to="/yourbotarmy">Your Bot Army</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<BotCollection />} />
        <Route path="/yourbotarmy" element={<YourBotArmy />} />
        <Route path="/bots/:id" element={<BotSpecs />} />
      </Routes>
    </Router>
  );
};

export default App;
