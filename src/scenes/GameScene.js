import Phaser from 'phaser';
// import Player from '../classes/player/Player';
import PlayerContainer from '../classes/player/PlayerContainer';
import Chest from '../classes/Chest';
// import goldSound from '../../assets/audio/Pickup.wav';
// import Ui from './UiScene';
// import Spawner from '../game_manager/Spawner'
import Map from '../classes/Map';
import GameManager from '../game_manager/GameManager'
import Monster from '../classes/Monster';
export default class GameScene extends Phaser.Scene {
 
    constructor() {
        super('Game');
    }
    
    init() {
      this.scene.launch('Ui')    
    }
 
    create() {
      this.createMap();
      this.createAudio();
      this.createGroups();
      this.createInput();

      this.createGameManager(); 
    }
 
    update() {
      if (this.player) this.player.update(this.cursors);
    }
 
    createAudio() {
      this.goldPickupAudio = this.sound.add('goldSound');
    }
 
    createPlayer(playerObject) {
      this.player = new PlayerContainer(
        this,
        playerObject.x * 2,
        playerObject.y * 2,
        'characters',
        0,
        playerObject.health,
        playerObject.maxHealth,
        playerObject.id,
      );
    }
 
    createGroups(){
      this.chests = this.physics.add.group();

      this.monsters = this.physics.add.group();
    }
 
    spawnChest(chestObject) {
      let chest = this.chests.getFirstDead();
      if (!chest) {
        chest = new Chest(this, chestObject.x * 2, chestObject.y * 2, 'items', 0, chestObject.gold, chestObject.id);
        this.chests.add(chest);
      } else {
        chest.coins = chestObject.gold;
        chest.id = chestObject.id;
        chest.setPosition(chestObject.x * 2, chestObject.y * 2);
        chest.makeActive();
      }
    }
 
    createInput() {
        this.cursors = this.input.keyboard.createCursorKeys();
    }
 
    addCollisions() {
      // check for collisions between the player and the tiled blocked layer
      this.physics.add.collider(this.player, this.map.blockedLayer);
      // check for overlaps between player and chest game objects
      this.physics.add.overlap(this.player, this.chests, this.collectChest, null, this);
      // check for collisions between the monster group and the tiled blocked layer
      this.physics.add.collider(this.monsters, this.map.blockedLayer);
      // check for overlaps between the player's weapon and monster game objects
      this.physics.add.overlap(this.player.weapon, this.monsters, this.enemyOverlap, null, this);
    }

    enemyOverlap(weapon, enemy) {
      if (this.player.playerAttacking && !this.player.swordHit) {
        this.player.swordHit = true;
        this.events.emit('monsterAttacked', enemy.id, this.player.id);
      }
    }
 
    collectChest(player, chest) {
      this.goldPickupAudio.play();
      // this.score += chest.coins;
      // this.events.emit('updateScore', this.score);
      // chest.makeInactive();
      // this.events.emit('pickUpChest', chest.id);
      this.events.emit('pickUpChest', chest.id, player.id);
    }

    createMap() {
      this.map = new Map(this, 'map', 'background', 'background', 'blocked');
    }

    spawnMonster(monsterObject) {
        let monster = this.monsters.getFirstDead();  // declare the mosnter variable only here
        if (!monster) {
          monster = new Monster(                     // the const keyword is removed here
            this,
            monsterObject.x * 2,
            monsterObject.y * 2,
            'monsters',
            monsterObject.frame,
            monsterObject.id,
            monsterObject.health,
            monsterObject.maxHealth,
          );
          // add monster to monsters group
          this.monsters.add(monster);
          monster.setCollideWorldBounds(true);
        } else {
          monster.id = monsterObject.id;
          monster.health = monsterObject.health;
          monster.maxHealth = monsterObject.maxHealth;
          monster.setTexture('monsters', monsterObject.frame);
          monster.setPosition(monsterObject.x * 2, monsterObject.y * 2);
          monster.makeActive();
        }
    }

    createGameManager() {
      this.events.on('spawnPlayer', (playerObject) => {
        this.createPlayer(playerObject);
        this.addCollisions();
      });
   
      this.events.on('chestSpawned', (chest) => {
        this.spawnChest(chest);
      });
   
      this.events.on('monsterSpawned', (monster) => {
        this.spawnMonster(monster);
      });
   
      this.events.on('chestRemoved', (chestId) => {
        this.chests.getChildren().forEach((chest) => {
          if (chest.id === chestId) {
            chest.makeInactive();
          }
        });
      });
   
      this.events.on('monsterRemoved', (monsterId) => {
        this.monsters.getChildren().forEach((monster) => {
          if (monster.id === monsterId) {
            monster.makeInactive();
          }
        });
      });
   
      this.events.on('updateMonsterHealth', (monsterId, health) => {
        this.monsters.getChildren().forEach((monster) => {
          if (monster.id === monsterId) {
            monster.updateHealth(health);
          }
        });
      });
   
      this.events.on('updatePlayerHealth', (playerId, health) => {
        this.player.updateHealth(health);
      });
   
      this.gameManager = new GameManager(this, this.map.map.objects);
      this.gameManager.setup();
  }
}