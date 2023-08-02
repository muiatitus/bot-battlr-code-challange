import React from 'react';

function BotCard({ bot, onEnlist }) {
    const handleEnlistClick = () => {
      onEnlist(bot); // Call the onEnlist function from props and pass the bot as an argument
    };
  
    return (
      <div className="bot-card">
        <img src={bot.avatar_url} alt={bot.name} />
        <h2>{bot.name}</h2>
        <p>Health: {bot.health}</p>
        <p>Damage: {bot.damage}</p>
        <p>Armor: {bot.armor}</p>
        <p>Class: {bot.bot_class}</p>
        <button onClick={handleEnlistClick}>Enlist</button> {/* Call handleEnlistClick */}
      </div>
    );
  }
  

export default BotCard;
