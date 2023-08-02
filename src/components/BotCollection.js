// components/BotCollection.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BotCollection = () => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8001/bots')
      .then(response => {
        setBots(response.data);
      })
      .catch(error => {
        console.error('Error fetching bots:', error);
      });
  }, []);

  return (
    <div>
      <h1>Bot Collection</h1>
      <div className="bot-collection">
        {bots.map(bot => (
          <div key={bot.id} className="bot-card">
            <img src={bot.avatar_url} alt={bot.name} />
            <h3>{bot.name}</h3>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <Link to={`/bots/${bot.id}`}>View Details</Link>
            {/* Add enlist button here with onClick event */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BotCollection;
