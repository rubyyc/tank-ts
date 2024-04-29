import config from '../config'
import PlayerModel from '../model/player'
import CanvasAbstract from './canvas'

class Player extends CanvasAbstract implements ICanvas {
  num(): number {
    return config.player.number
  }
  model(): modelConstructor {
    return PlayerModel
  }

  render(): void {
    this.createModels()
    this.renderModels()
  }

  protected createModels() {
    const model = this.model() as modelConstructor
    console.log(this.num())
    ;[
      {
        x: config.canvas.width / 2 - config.model.width * 4,
        y: config.canvas.height - config.model.height,
      },
    ].forEach((p) => {
      const instance = new model(p.x, p.y)
      this.models.push(instance)
    })
  }

}

export default new Player('player')
