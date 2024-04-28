import config from '../config'
import SteelModel from '../model/steel'
import CanvasAbstract from './canvas'

class Steel extends CanvasAbstract implements ICanvas{
  num(): number {
    return config.steel.number
  }
  model(): modelConstructor {
    return SteelModel
  }

  render(): void {
    super.createModels()
    super.renderModels()
  }

}

export default new Steel('steel')
