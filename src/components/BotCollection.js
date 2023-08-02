import React, { useState, useEffect } from 'react';
import axios from 'axios'; // If you use Axios for data fetching
import BotCard from './BotCard';
import FilterBar from './FilterBar'; // Import the FilterBar component
import SortBar from './SortBar'; // Import the SortBar component

function BotCollection() {
  const [bots, setBots] = useState([]);
  const [filteredBots, setFilteredBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]); // New state to hold enlisted bots
  const [sortCriteria, setSortCriteria] = useState(null);

  useEffect(() => {
    // Fetch data from the local server using Axios (or any other method)
    axios.get('http://localhost:8001/bots')
      .then((response) => {
        setBots(response.data);
        setFilteredBots(response.data); // Initialize filteredBots with all bots
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  const handleEnlist = (bot) => {
    // Implement the logic to enlist the bot into the army
    // You can add the bot to the list of enlisted bots in state, for example
    // For demonstration purposes, let's assume you have an enlistedBots state:
    setEnlistedBots((prevEnlistedBots) => [...prevEnlistedBots, bot]);
  };
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

  return (
    <div>
      <h1>Bot Collection</h1>
      <FilterBar onFilter={handleFilter} /> {/* Pass the handleFilter function to the FilterBar */}
      <SortBar onSort={handleSort} /> {/* Pass the handleSort function to the SortBar */}
      <div className="bot-list">
        {filteredBots.map((bot) => (
          <BotCard key={bot.id} bot={bot} onEnlist={handleEnlist} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
