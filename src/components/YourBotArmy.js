// components/YourBotArmy.js
import React, { useState } from 'react';
const YourBotArmy = () => {
  const [armyBots, setArmyBots] = useState([]);

  // Function to enlist a bot
  const enlistBot = (bot) => {
    // Check if the bot is already enlisted
    if (!armyBots.find(armyBot => armyBot.id === bot.id)) {
      setArmyBots([...armyBots, bot]);
    }
  };

  // Function to release a bot
  const releaseBot = (bot) => {
    const updatedArmy = armyBots.filter(armyBot => armyBot.id !== bot.id);
    setArmyBots(updatedArmy);
  };

  // Function to discharge a bot permanently
  const dischargeBot = (bot) => {
    // Send a DELETE request to the backend to delete the bot with ID bot.id
    // After successful response, also remove the bot from the army
  };

  return (
    <div>
      <h1>Your Bot Army</h1>
      <div className="your-bot-army">
        {armyBots.map(bot => (
          <div key={bot.id} className="bot-card" onClick={() => enlistBot(bot)}>
            <img src={bot.avatar_url} alt={bot.name} />
            <h3>{bot.name}</h3>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <button onClick={() => releaseBot(bot)}>Release</button>
            <button onClick={() => dischargeBot(bot)}>Discharge</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourBotArmy;

