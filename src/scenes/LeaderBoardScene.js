import Phaser from 'phaser';
import setSores from '../Objects/api';
import Button from '../Objects/UiButton';
import config from '../Config/config';

export default class LeaderBoardScene extends Phaser.Scene {
  constructor() {
    super('LeaderBoard');
  }


  create() {
    this.add.text(250, 100, 'Leader Board 🏆', { fontSize: '54px', fill: '#fff' });

    this.retrieveScore();

    this.menuButton = new Button(this, config.width / 2, config.height / 2 - 100, 'button1', 'button2', 'Menu', this.startScene.bind(this, 'Title'));
  }

  startScene(targetScene) {
    this.scene.start(targetScene);
  }

  async retrieveScore() {
    const response = await setSores.getScores();
    const scores = response.sort((x, y) => y.score - x.score);
    if (scores.empty) {
      //
    } else {
      this.displayScores(scores);
    }
  }

  displayScores(info) {
    let spaceY = 0;

    for (let i = 0; i <= 7; i += 1) {
      this.add.text(340, 240 + spaceY, `${i + 1}.`, { fontSize: 20 });
      this.add.text(375, 240 + spaceY, `${info[i].player}`, { fontSize: 20 });
      this.add.text(510, 240 + spaceY, `${info[i].score}`, { fontSize: 20 });
      spaceY += 25;
    }
  }
}