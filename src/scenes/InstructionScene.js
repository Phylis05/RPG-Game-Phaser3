import 'phaser';
import Button from '../Objects/UiButton';
import Button2 from '../../assets/images/ui/blue_button02.png';
/* eslint-disable no-undef */

export default class InstructionScene extends Phaser.Scene {
  constructor() {
    super('Instruction');
  }

  create() {
    // const image = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'bgImage');
    // const scaleX = this.cameras.main.width / image.width;
    // const scaleY = this.cameras.main.height / image.height;
    // const scale = Math.max(scaleX, scaleY);
    // image.setScale(scale).setScrollFactor(0);

    this.text = this.add.text(200, 40, 'How to play😎', { fontSize: 40 });

    // this.leftButton = new Button(this, 200, 120, 'blueButton1', 'blue_button02.png', '⬅️');
    this.leftText = this.add.text(200, 100, 'Move the player to the left', { fontSize: 24 });

    // this.rightButton = new Button(this, 200, 180, 'blueButton1', 'blueButton2', '➡️');
    this.rightText = this.add.text(200, 160, 'Move the player to the right', { fontSize: 24 });

    // this.upButton = new Button(this, 200, 240, 'blueButton1', 'blueButton2', '⬆️');
    this.upText = this.add.text(200, 220, 'Move the player up', { fontSize: 24 });

    // this.downButton = new Button(this, 200, 300, 'blueButton1', 'blueButton2', '⬇️');
    this.downText = this.add.text(200, 280, 'Move the player down ⬇️', { fontSize: 24 });

    // this.menuButton = new Button(this, 300, 500, 'blueButton1', 'blueButton2', 'Menu', 'Title');

    this.menuButton = new Button(this, 400, 400, 'button1', 'button2', 'Play', this.startScene.bind(this, 'Game'));

  }
  startScene(targetScene) {
    this.scene.start(targetScene);
  }
}