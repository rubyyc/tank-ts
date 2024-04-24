import config from '../config'
import WaterModel from '../model/water'
import CanvasAbstract from './canvas'

class Water extends CanvasAbstract implements ICanvas{
  num(): number {
    return config.water.number
  }
  model(): modelConstructor {
    return WaterModel
  }

  render(): void {
    super.createModels()
    super.renderModels()
  }

}

export default new Water()
