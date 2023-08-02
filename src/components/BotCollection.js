import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BotCard from './BotCard';
import FilterBar from './FilterBar';
import SortBar from './SortBar';
import YourBotArmy from './YourBotArmy';

function BotCollection() {
  const [bots, setBots] = useState([]);
  const [filteredBots, setFilteredBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);
  const [sortCriteria, setSortCriteria] = useState(null);

  useEffect(() => {
    // Fetch data from the local server using Axios (or any other method)
    axios
      .get('http://localhost:8001/bots')
      .then((response) => {
        setBots(response.data);
        setFilteredBots(response.data); // Initialize filteredBots with all bots
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleFilter = (botClass) => {
    if (botClass === 'all') {
      setFilteredBots(bots); // Show all bots
    } else {
      const filtered = bots.filter((bot) => bot.bot_class === botClass);
      setFilteredBots(filtered); // Show bots of the selected class
    }
  };

  const handleSort = (criteria) => {
    setSortCriteria(criteria);
    if (criteria === null) {
      setFilteredBots(bots); // Reset to the original order
    } else {
      const sorted = [...filteredBots].sort((a, b) => b[criteria] - a[criteria]);
      setFilteredBots(sorted); // Sort the bots based on the selected criteria
    }
  };

  const handleEnlist = (bot) => {
    // Check if the bot is already enlisted
    if (enlistedBots.some((enlistedBot) => enlistedBot.id === bot.id)) {
      alert('This bot is already enlisted!');
    } else {
      // Add the bot to the enlistedBots state
      setEnlistedBots((prevEnlistedBots) => [...prevEnlistedBots, bot]);
    }
  };

  const handleRelease = async (bot) => {
    try {
      // Remove the bot from the backend
      await axios.delete(`http://localhost:8001/bots/${bot.id}`);
      // Remove the bot from the enlistedBots state
      setEnlistedBots((prevEnlistedBots) =>
        prevEnlistedBots.filter((enlistedBot) => enlistedBot.id !== bot.id)
      );
    } catch (error) {
      console.error('Error releasing bot:', error);
    }
  };

  return (
    <div>
      <h1>Bot Collection</h1>
      <YourBotArmy enlistedBots={enlistedBots} onRelease={handleRelease} />
      <FilterBar onFilter={handleFilter} />
      <SortBar onSort={handleSort} />
      <div className="bot-list">
        {filteredBots.map((bot) => (
          <BotCard key={bot.id} bot={bot} onEnlist={handleEnlist} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
