import config from '../config'
import WallModel from '../model/wall'
import CanvasAbstract from './canvas'

class Wall extends CanvasAbstract implements ICanvas{
  num(): number {
    return config.wall.number
  }
  model(): modelConstructor {
    return WallModel
  }

  render(): void {
    super.createModels()
    super.renderModels()
  }

}

export default new Wall('wall')
