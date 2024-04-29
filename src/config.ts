import straw from './static/images/straw/straw.png'
import wall from './static/images/wall/wall.gif'
import steel from './static/images/wall/steels.gif'
import water from './static/images/water/water.gif'
import boss from './static/images/boss/boss.png'
import tankTop from './static/images/tank/top.gif'
import tankRight from './static/images/tank/right.gif'
import tankBottom from './static/images/tank/bottom.gif'
import tankLeft from './static/images/tank/left.gif'
import playerTop from './static/images/player/top.gif'
import playerRight from './static/images/player/right.gif'
import playerBottom from './static/images/player/bottom.gif'
import playerLeft from './static/images/player/left.gif'
import bullet from './static/images/bullet/bullet.jpg'

const config = {
  timeout: 30,
  dx: 1,
  canvas: {
    width: 900,
    height: 600,
  },
  model: {
    width: 30,
    height: 30,
  },
  straw: {
    number: 60,
  },
  wall: {
    number: 60,
  },
  steel: {
    number: 20,
  },
  water: {
    number: 50,
  },
  player: {
    number: 1,
  },
  tank: {
    number: 20,
  },
  images: {
    straw,
    wall,
    steel,
    water,
    tankTop,
    tankRight,
    tankBottom,
    tankLeft,
    playerTop,
    playerRight,
    playerBottom,
    playerLeft,
    bullet,
    boss
  },
}

export default config
