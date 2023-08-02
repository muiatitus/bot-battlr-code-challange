// components/BotSpecs.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BotSpecs = (props) => {
  const [bot, setBot] = useState(null);
  const botId = props.match.params.id;

  useEffect(() => {
    axios.get(`http://localhost:8001/bots/${botId}`)
      .then(response => {
        setBot(response.data);
      })
      .catch(error => {
        console.error('Error fetching bot:', error);
      });
  }, [botId]);

  if (!bot) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Bot Details</h1>
      <div className="bot-details">
        <img src={bot.avatar_url} alt={bot.name} />
        <h3>{bot.name}</h3>
        <p>Health: {bot.health}</p>
        <p>Damage: {bot.damage}</p>
        <p>Armor: {bot.armor}</p>
        {/* Add enlist button here with onClick event */}
      </div>
    </div>
  );
};

export default BotSpecs;
