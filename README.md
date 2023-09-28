# Battleship Game Web App

This project is a web-based implementation of the classic Battleship game. The goal is to design and implement a partial Battleship game that allows a player to take turns and sink the computer's fleet of ships. Below are the details and instructions for the project.

## Game Rules

In Battleship, you are tasked with sinking the computer's fleet of ships. The computer has positioned five ships of various sizes on a 10x10 board. Each ship must be placed either horizontally or vertically on the board without overlapping another ship. The player cannot see the ship locations. Each round, the player selects a board position to fire at, and the computer indicates whether it's a "hit" or a "miss." When all tiles of a particular ship have been hit, the computer indicates that the entire ship has been sunk. The game ends when the player has sunk all of the computer's ships.

## Features

- Web-based Battleship game.
- Responsiveness and mobile-friendly design.
- Computer-controlled fleet of ships.
- Hit and miss feedback for player's moves.
- Sinking indication for each ship.
- Game ends when all computer ships are sunk.

## Technologies Used

- [React](https://reactjs.org/) for building the user interface.
- [Redux](https://redux.js.org/) for managing the game state.
- HTML and CSS for structuring and styling the game.
- JavaScript (ES6) for implementing game logic.

## Installation and Usage

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/HamidHabib/battleship.git
   ```

2. Navigate to the project directory:

   ```bash
   cd battleship
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your web browser and access the game at [http://localhost:3000](http://localhost:3000).

6. Play the game by taking turns and trying to sink the computer's ships.

## Project Structure

The project structure is organized as follows:

- `src`: Contains the source code for the Battleship game.
  - `components`: React components used in the game.
  - `state`: Redux state reducers and selectors for managing game state.
  - `assets`: Game-related assets (images, icons, etc.).
  - `App.js`: Main application component.
- `public`: Public assets and HTML template.

## Ship Layout Data

The ship layout data is provided in the project's source code. You can find it in the `reducers` directory.

## Future Improvements

Here are some ideas for future improvements to enhance the game:

- Implement a two-player mode where players can take turns sinking each other's fleets.
- Add sound effects and animations for a more immersive gaming experience.
- Implement a scoring system to keep track of the player's performance.

---

Have fun playing Battleship and feel free to contribute to or modify this project as needed!
