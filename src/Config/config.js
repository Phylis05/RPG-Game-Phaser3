/* eslint-disable no-unused-vars */
/* eslint-disable import/no-cycle */
import Phaser from 'phaser';
import GameScene from '../scenes/GameScene';
import BootScene from '../scenes/BootScene';
import Preloader from '../scenes/PreloaderScene';
import TitleScene from '../scenes/TitleScene';
import GameOverScene from '../scenes/GameOverScene';
import LeaderBoardScene from '../scenes/LeaderBoardScene';
import UiScene from '../scenes/UiScene';

export default {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 900,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: {
        y: 0,
      },
    },
  },
  pixelArt: true,
  roundPixels: true,
  dom: {
    createContainer: true,
  },
};
// import Phaser from 'phaser';
// import GameScene from '../scenes/GameScene';
// import BootScene from '../scenes/BootScene';
// import Preloader from '../scenes/PreloaderScene';
// import TitleScene from '../scenes/TitleScene';
// import InstructionScene from '../scenes/InstructionScene';
// import GameOverScene from '../scenes/GameOverScene';
// import LeaderBoardScene from '../scenes/LeaderBoardScene';
// import UiScene from '../scenes/UiScene';

// export default {
//   type: Phaser.AUTO,
//   width: 800,
//   height: 600,
//   scene: [
//     BootScene,
//     Preloader,
//     TitleScene,
//     InstructionScene,
//     GameScene,
//     UiScene,
//     GameOverScene,
//     LeaderBoardScene,
//  ],
//   physics: {
//       default: 'arcade',
//       arcade: {
//         debug: true,
//         gravity: {
//           y:0,
//         },
//       },
//     },
//     pixelArt: true,
//     roundPixels: true,
// };

// // let game = new Phaser.Game(gameConfig);