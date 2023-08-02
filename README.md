# Bot Battlr

Welcome to Bot Battlr, the one and only spot in the known universe where you can custom build your own Bot Army! This is our app:

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [Endpoints](#endpoints)
- [Advanced Deliverables](#advanced-deliverables)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Introduction

For this project, you'll be building out a React application that displays a list of available bots, among other features. The app will allow users to view detailed information about each bot, enlist them into their army, release bots from their army, and even delete bots from the backend permanently.

## Image illustration

![Image Alt Text](./src/Screenshot%20from%202023-08-02%2017-56-28.png)

## Features

- See profiles of all bots rendered in `BotCollection`.
- Add an individual bot to your army by clicking on it. The selected bot will be rendered in the `YourBotArmy` component. The bot can be enlisted only **once**.
- Release a bot from your army by clicking on it. The bot will disappear from the `YourBotArmy` component but will still be available in the `BotCollection`.
- Discharge a bot from their service forever by clicking the red button marked "x", which will delete the bot both from the backend and from the `YourBotArmy` on the frontend.
- Filter bots by class and sort bots by health, damage, or armor.
- Only enlist **one** bot from each `bot_class`. The classes are `["Support", "Medic", "Assault", "Defender", "Captain", "Witch"]`.

## Getting Started

To get started with the Bot Battlr app, follow these steps:

1. Clone this repository to your local machine using `git clone https://github.com/your-username/bot-battlr.git`.
2. Navigate to the project directory: `cd bot-battlr`.
3. Install the required dependencies: `npm install`.
4. Start the development server: `npm start`.
5. Open your web browser and visit `http://localhost:3000` to view the app.

## Endpoints

- **GET /bots**: Fetch all bots from the backend server.
- **DELETE /bots/:id**: Delete a bot by its ID from the backend server.

## Advanced Deliverables

These deliverables are optional but can be implemented to enhance the project further:

- Choose if you want to enlist a bot into your army or just see their data. Clicking on the card will display a show view (`BotSpecs`) for that bot, which replaces `BotCollection`. BotSpecs will have two buttons: one to go back to the list view and another to enlist that bot.
- Sort bots by their health, damage, or armor. For this, create a new component, `SortBar`.
- Filter bots by their class. You can select a few filters at the same time.

## Technologies Used

- React
- React Router
- Axios (for data fetching)
- JSON Server (for the backend)

## Contributing

Contributions to Bot Battlr are welcome! If you have any bug fixes, improvements, or new features to add, feel free to open a pull request.

## License

This project is licensed under the [MIT License](https://github.com/muiatitus/bot-battlr-code-challange/new/main).
