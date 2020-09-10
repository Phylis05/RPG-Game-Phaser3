import Phaser from 'phaser';
import UiButton from '../Objects/UiButton';
import config from '../Config/config';

export default class TitleScene extends Phaser.Scene {
  constructor() {
      super('Title');
  }

  preload() {

  }

  create() {
    this.titleText = this.add.text(200, 100, 'Zombie Attack', { fontSize: '54px', fill: '#fff' });

    this.gameButton = new UiButton(this, config.width / 2, config.height / 2 - 100, 'button1', 'button2', 'Play', this.startScene.bind(this, 'Game'));

    this.creditsButton = new UiButton(this, config.width / 2, config.height / 2, 'button1', 'button2', 'Instructions', this.startScene.bind(this, 'Instruction'));

    this.LeaderButton = new UiButton(this, config.width / 2, config.height / 2 + 100, 'button1', 'button2', 'Scores', this.startScene.bind(this, 'LeaderBoard'));
  }

  startScene(targetScene) { 
    this.scene.start(targetScene);
  }
}