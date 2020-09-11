## RPG-Game-Phaser3
This is an RPG game built with the Phaser game library

## Live Demo
![Zombie Attack Game]()

## About
- The main objective of this project was to build a platform game. I got inspiration from Zenva Academy Tutorial to implement the game design, different scenes and scoring system.
- Created game background design using tilesmap editor. The blocked layers and game objects such as the players, treasure box and monsters were added while designing on the map editor and the background image was exported in a json file.
- Got the initial game template setup from Zenva Academy. I then modified to add extra features to enhance the game.The game logic is made up of the following:
  - The player spawn at different locations of the gamescene as the game starts.
  - There are blocked layers so the player does not move freely in the tilemap or background just to increase the complexity.
  - The monsters and the treasure box spawn at different locations of the gamescene, just like the player does.
  - The player must collect the treasure box to get more gold.
  - The player gets more health and gold by fighting the monsters with his sword. The sword can be gotten by pressing the spacebar of your keyboard.
  - The player must be quick to fight the monsters so that he doesn't lose his/her health.
  - The game is over when the player's health is at zero.
- The leaderboard API is implemented to display players with highest scores.

## How to play:
- Use the left arrow key on the keyboard to move the player to the left of the game scene, the right arrow key to the right,the up arrow key to up and the down arrow key to down.
- Use the space bar key on the keyboard to fight the monsters with your weapon which is a sword. The player must collect the treasure box to get more gold.
- The player gets more health and gold by fighting the monsters with his sword. The sword can be gotten by pressing the space bar key on your keyboard.
- The player must be quick to fight the monsters so that he doesn't lose his health.
- The game is over if the player's health is at zero.
- When the game is over it takes you to screen where you can add your scores to the leader board, click on the submit button to add your name to the leader board.
- [Play online here](https://nostalgic-austin-fda8b7.netlify.app/);

## Built with:
- JavaScript
- HTML/CSS
- Phaser 3
- Babel
- Webpack
- Es6
- Jest
- Netlify
- Leaderboard API for tracking scores

## Get a local copy

- Clone the repository by running this command in your terminal 

  `git clone https://github.com/Phylis05/RPG-Game-Phaser3.git`
- Navigate into the newly created folder

  `cd RPG-GamePhaser3`

- Install all of the dependencies

  `npm install`

- Bundle the files and start the development server

  `npm run start`

- Visit this link to see the game in your browser

  `http://localhost:8080/`

- To run Jest tests

  `npm test`

## Author

👤 **Phylis Chepchumba**

- Github: [Phylis05](https://github.com/phylis05)
- Linkedin: [Phylis Chepchumba](https://linkedin.com/phylis-chepchumba)
- Twitter: [phylis_chumbaa](https://twitter.com/phylis_chumbaa)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/Phylis05/RPG-Game-Phaser3/issues).

## Show your support

Kindly give this repository a ⭐️ if you like this project!

## Acknowledgments

- [Microverse](https://www.microverse.org).
- [Phaser 3](https://phaser.io/).
- [Openweathermap](https://adventurerr.netlify.app/) image assets.
- [Zenva Academy](https://academy.zenva.com/?zva_src=https://gamedevacademy.org) rpg game tutoral.


## 📝 License

- This project is licensed under the MIT License.