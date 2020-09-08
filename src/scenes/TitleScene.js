import Phaser from 'phaser';
import UiButton from '../classes/UiButton';

export default class TitleScene extends Phaser.Scene {
  constructor() {
      super('Title');
  }

  preload() {

  }

  create() {
    this.titleText = this.add.text(this.scale.width / 2, this.scale.height / 2, 'Zenva MMORPG', { fontSize: '64px', fill: '#fff' });
    this.titleText.setOrigin(0.5);

    this.startGameButton = new UiButton(this, this.scale.width / 2, this.scale.height * 0.65, 'button1', 'button2', 'Start', this.startScene.bind(this, 'Game')); // NEio
  }

  startScene(targetScene) { 
    this.scene.start(targetScene);
  }
}