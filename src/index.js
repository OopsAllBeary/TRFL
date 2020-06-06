import Phaser from "phaser";

//images
import blueman from "./assets/sprites/bluemansp/spritesheet.png";
import bluemanWalk from "./assets/sprites/blueman-walk/spritesheet.png";
import bluemanCheer from "./assets/sprites/blueman-cheer/spritesheet.png";
import bluemanPunch from "./assets/sprites/blueman-punch/spritesheet.png";
import punch from "./assets/sprites/fist/spritesheet.png";

//sounds
import punchSlap from "./assets/audio/slap.mp3";
import punchStrong from "./assets/audio/spunch.mp3";
import punchWoosh from "./assets/audio/woosh.mp3";





let gameWidth = 800;
let gameHeight = 600;

const config = {
  type: Phaser.AUTO,
  width: gameWidth,
  height: gameHeight,
  scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: true
    }
  },
  parent: 'game-wrapper',
  scene: {
    preload: preload,
    create: create,
    // update: update
  }
};

const game = new Phaser.Game(config);

function preload() {
  //Sprites
  this.load.spritesheet('blueman', blueman, { frameWidth: 104, frameHeight: 92, endFrame: 16 });

  this.load.spritesheet('blueman-walk', bluemanWalk, { frameWidth: 108, frameHeight: 94, endFrame: 192 });

  this.load.spritesheet('blueman-cheer', bluemanCheer, { frameWidth: 122, frameHeight: 102, endFrame: 336 });

  this.load.spritesheet('blueman-punch', bluemanPunch, { frameWidth: 124, frameHeight: 100, endFrame: 224 });

  this.load.spritesheet('punch', punch, { frameWidth: 54, frameHeight: 104, endFrame: 16 });



  //Audio
  this.load.audio('punchSlap', punchSlap);
  this.load.audio('punchStrong', punchStrong);
  this.load.audio('punchWoosh', punchWoosh);
}

function create() {
  const logo = this.add.image(400, 150, "logo");

  this.tweens.add({
    targets: logo,
    y: 450,
    duration: 2000,
    ease: "Power2",
    yoyo: true,
    loop: -1
  });
}
