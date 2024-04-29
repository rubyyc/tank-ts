import config from '../config'
import bossModel from '../model/boss'
import CanvasAbstract from './canvas'

class Boss extends CanvasAbstract implements ICanvas{
  num(): number {
    return 0
  }
  model(): modelConstructor {
    return bossModel
  }

  render(): void {
    this.createModels()
    this.renderModels()
  }

  protected createModels(){

    const model = this.model() as modelConstructor
    console.log(this.num());
    [{ x:config.canvas.width/2,y:config.canvas.height - config.model.height}].forEach((p) => {
      const instance = new model(p.x, p.y)
      this.models.push(instance)
    })
  }

}

export default new Boss('boss')
