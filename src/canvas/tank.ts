import config from '../config'
import TankModel from '../model/tank'
import position from '../service/position'
import CanvasAbstract from './canvas'

class Tank extends CanvasAbstract implements ICanvas{
  num(): number {
    return config.tank.number
  }
  model(): modelConstructor {
    return TankModel
  }

  render(): void {
    this.createModels()
    super.renderModels()
  }

  protected createModels(){

    for (let index = 0;index < this.num(); index++) {
      const model = this.model()
      const p = position.position()
      const instance = new model(this.canvas, p.x, 0)
      this.models.push(instance)
    }

  }

}

export default new Tank()
