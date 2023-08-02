import React from 'react';

function BotSpecs({ bot }) {
  return (
    <div>
      <h1>Bot Specifications</h1>
      <div className="bot-details">
        <img src={bot.avatar_url} alt={bot.name} />
        <h2>{bot.name}</h2>
        <p>Health: {bot.health}</p>
        <p>Damage: {bot.damage}</p>
        <p>Armor: {bot.armor}</p>
        <p>Class: {bot.bot_class}</p>
        <p>Catchphrase: {bot.catchphrase}</p>
        {/* Add more details or other relevant information about the bot */}
      </div>
    </div>
  );
}

export default BotSpecs;
