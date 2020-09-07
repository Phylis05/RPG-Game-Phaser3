import Phaser from 'phaser';
import UiButton from '../classes/UiButton';
// import config from '../config/config';
export default class TitleScene extends Phaser.Scene {
  constructor() {
      super('Title');
  }

  preload() {

  }

  create() {
    // create title text
    this.titleText = this.add.text(this.scale.width / 2, this.scale.height / 2, 'Zenva MMORPG', { fontSize: '64px', fill: '#fff' });
    this.titleText.setOrigin(0.5);

    // create the Play game button
    this.startGameButton = new UiButton(this, this.scale.width / 2, this.scale.height * 0.65, 'button1', 'button2', 'Start', this.startScene.bind(this, 'Game')); // NEW
  }

  // NEW function:
  startScene(targetScene) { 
    this.scene.start(targetScene);
  }
}