import config from '../config'
import StrawModel from '../model/straw'
import CanvasAbstract from './canvas'

class Straw extends CanvasAbstract {
  render(): void {
    super.drawModels(config.straw.number,StrawModel)
  }

}

export default new Straw()
