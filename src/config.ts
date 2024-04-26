import straw from './static/images/straw/straw.png'
import wall from './static/images/wall/wall.gif'
import steel from './static/images/wall/steels.gif'
import water from './static/images/water/water.gif'
import tankTop from './static/images/tank/top.gif'
import tankRight from './static/images/tank/right.gif'
import tankBottom from './static/images/tank/bottom.gif'
import tankLeft from './static/images/tank/left.gif'

const config = {
  timeout: 50,
  dx: 4,
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
  tank: {
    number: 40,
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
  },
}

export default config
