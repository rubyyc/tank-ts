import straw from './static/images/straw/straw.png'
import wall from './static/images/wall/wall.gif'
import steel from './static/images/wall/steels.gif'
import water from './static/images/water/water.gif'
import tank from './static/images/tank/left.gif'

const config = {
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
    number: 20
  },
  water: {
    number: 50,
  },
  tank: {
    number: 20,
  },
  images: {
    straw,
    wall,
    steel,
    water,
    tank,
  },
}

export default config
