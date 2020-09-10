import Phaser from 'phaser';
import Button from '../Objects/UiButton';
import setSores from '../Objects/api';
import config from '../Config/config';

/* eslint-disable no-undef */

let result = 0;

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  getGold(value) {
    result = value;
  }

  create() {
    console.log('Game Over');
    this.add.text(450, 200, `Total Score: ${result}`, { fontSize: 36 }).setOrigin(0.5);
    
    const mainDiv = document.getElementById('phaser-game');
    const userData = document.createElement('div');
    const input = document.createElement('input');
    input.setAttribute('id', 'user-name');
    input.setAttribute('placeholder', 'Enter Your Name');
    input.type = 'text';
    userData.appendChild(input);

    const submitBtn = document.createElement('button');
    submitBtn.innerHTML = 'Submit';
    submitBtn.setAttribute('class', 'btn btn-secondary btn-submit');
    userData.appendChild(submitBtn);

    mainDiv.appendChild(userData);

    submitBtn.addEventListener('click', () => {
      const name = document.getElementById('user-name').value;
      document.getElementById('user-name').remove();
      document.querySelector('.btn-submit').remove();
      setSores.saveScore(name, result);
    });

    this.leaderButton = new Button(this, config.width / 2, config.height / 2 - 100, 'button1', 'button2', 'View Scores', this.startScene.bind(this, 'LeaderBoard'));

  }
  startScene(targetScene) { 
    this.scene.start(targetScene);
  }
}