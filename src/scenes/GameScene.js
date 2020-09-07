import Phaser from 'phaser';
import Player from '../classes/Player';
import Chest from '../classes/Chest';
// import Ui from 'UiScene';
export default class GameScene extends Phaser.Scene {
 
  constructor() {
      super('Game');
  }

  init() {
    this.scene.launch('Ui');
  }

  create() {
    this.goldPickupAudio = this.sound.add('goldSound');  // NEW
      
    this.chest = new Chest(this, 300, 300, 'items', 0);
      
    this.wall = this.physics.add.image(500, 100, 'button1');
    this.wall.setImmovable();
      
    this.player = new Player(this, 32, 32, 'characters', 0);
      
    this.physics.add.collider(this.player, this.wall);
    this.physics.add.overlap(this.player, this.chest, this.collectChest, null, this); // NEW
      
    this.cursors = this.input.keyboard.createCursorKeys();
}

  update() {
    this.player.update(this.cursors);
  }

  collectChest(player, chest) {
    this.goldPickupAudio.play(); 
    this.events.emit('updateScore', chest.coins);
    chest.destroy(); 
  }

}