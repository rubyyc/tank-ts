import config from '../config'
import StrawModel from '../model/straw'
import CanvasAbstract from './canvas'

class Straw extends CanvasAbstract implements ICanvas{
  num():number {
    return config.straw.number
  }

  model(): modelConstructor {
    return StrawModel
  }

  render(): void {
    super.createModels()
    super.renderModels()
  }

}

export default new Straw('straw')
