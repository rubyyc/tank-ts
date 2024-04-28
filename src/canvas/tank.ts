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
    this.renderModels()

    setInterval(()=> this.renderModels(),config.timeout)
  }

  protected createModels(){

    for (let index = 0;index < this.num(); index++) {
      const model = this.model()
      const p = position.position()
      const instance = new model(p.x, 0)
      this.models.push(instance)
    }

  }

  public renderModels()
  {
    this.ctx.clearRect(0,0,config.canvas.width,config.canvas.height)
    super.renderModels()
  }

}

export default new Tank('tank')
