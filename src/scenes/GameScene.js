import Phaser from 'phaser';
import Player from '../classes/Player';
import Chest from '../classes/Chest';
import goldSound from '../../assets/audio/Pickup.wav';
// import Ui from 'UiScene';
export default class GameScene extends Phaser.Scene {
 
    constructor() {
        super('Game');
    }
    
    init() {
      this.scene.launch('Ui');
      this.score = 0;
    }
 
    create() {
        this.createAudio();
      
        this.createChests();
      
        this.createWalls();
      
        this.createPlayer();
      
        this.addCollisions();
      
        this.createInput();
    }
 
    update() {
        this.player.update(this.cursors);
    }
 
    createAudio() {
        this.goldPickupAudio = this.sound.add('goldSound');
    }
 
    createPlayer(){
        this.player = new Player(this, 32, 32, 'characters', 0);
    }
 
    createChests(){
        this.chests = this.physics.add.group(); // NEW
        this.chestPositions = [[100,100], [200,200], [300,300], [400,400],[500,500]]; // NEW
        this.maxNumberOfChests = 3; // NEW
 
        for(let i = 0; i < this.maxNumberOfChests; i++) { // NEW
          this.spawnChest(); // NEW
        } // NEW
    }
 
    spawnChest() {
       // NEW code starts here
       const location = this.chestPositions[Math.floor(Math.random() * this.chestPositions.length)];
       this.chest = new Chest(this, location[0], location[1], 'items', 0);
       this.chests.add(this.chest);
    // NEW code ends here
    }
 
    createWalls(){
        this.wall = this.physics.add.image(500, 100, 'button1');
        this.wall.setImmovable();
    }
 
    createInput() {
        this.cursors = this.input.keyboard.createCursorKeys();
    }
 
    addCollisions() {
        this.physics.add.collider(this.player, this.wall);
        this.physics.add.overlap(this.player, this.chests, this.collectChest, null, this);
    }
 
    collectChest(player, chest) {
        // NEW code starts here
        this.goldPickupAudio.play(); 
        this.score += chest.coins;
        this.events.emit('updateScore', this.score);
        chest.destroy(); 
        this.time.delayedCall(1000, this.spawnChest, [], this);
        // NEW code ends here
    }
}