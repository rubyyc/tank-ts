import config from '../config'
import TankModel from '../model/tank'
import CanvasAbstract from './canvas'

class Tank extends CanvasAbstract {
  num(): number {
    return config.tank.number
  }
  model(): modelConstructor {
    return TankModel
  }

  render(): void {
    super.createModels()
    super.renderModels()
  }

}

export default new Tank()
