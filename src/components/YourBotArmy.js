// YourBotArmy.js

import React from 'react';

function YourBotArmy({ enlistedBots, onRelease }) {
  const reverseEnlistedBots = [...enlistedBots].reverse();

  console.log('Enlisted Bots:', enlistedBots); // Check the enlistedBots prop
  console.log('Reverse Enlisted Bots:', reverseEnlistedBots); // Check the reverseEnlistedBots variable

  return (
    <div>
      <h2>Your Bot Army</h2>
      <div className="bot-list">
        {reverseEnlistedBots.map((bot) => (
          <div className="bot-card" key={bot.id}>
            <img src={bot.avatar_url} alt={bot.name} />
            <h2>{bot.name}</h2>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <button onClick={() => onRelease(bot)}>Release</button>

          </div>
        ))}
      </div>
    </div>
  );
}
export default YourBotArmy;
