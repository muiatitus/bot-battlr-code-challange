import React, { useState } from 'react';
import BotCard from './BotCard';

function YourBotArmy() {
  const [enlistedBots, setEnlistedBots] = useState([]);

  const enlistBot = (bot) => {
    // Check if the bot is not already enlisted
    if (!enlistedBots.includes(bot)) {
      setEnlistedBots([...enlistedBots, bot]);
    }
  };

  const releaseBot = (bot) => {
    setEnlistedBots(enlistedBots.filter((enlistedBot) => enlistedBot !== bot));
  };

  return (
    <div>
      <h1>Your Bot Army</h1>
      <div className="bot-army">
        {enlistedBots.map((bot) => (
          <div key={bot.id}>
            <BotCard bot={bot} />
            <button onClick={() => releaseBot(bot)}>Release</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
