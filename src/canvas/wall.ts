import config from '../config'
import WallModel from '../model/wall'
import CanvasAbstract from './canvas'

class Wall extends CanvasAbstract implements ICanvas {
  num(): number {
    return config.wall.number
  }
  model(): modelConstructor {
    return WallModel
  }

  render(): void {
    super.createModels()
    // 绘制boss
    this.createBossWall()
    super.renderModels()
  }

  createBossWall() {
    const cw = config.canvas.width
    const ch = config.canvas.height
    const mw = config.model.width
    const mh = config.model.height

    const position = [
      { x: cw / 2 - mw * 2, y: ch - mh },
      { x: cw / 2 - mw * 2, y: ch - mh * 2 },
      { x: cw / 2 - mw * 2, y: ch - mh * 3 },
      { x: cw / 2 - mw, y: ch - mh * 3 },
      { x: cw / 2, y: ch - mh * 3 },
      { x: cw / 2 + mw, y: ch - mh * 3 },
      { x: cw / 2 + mw * 2, y: ch - mh * 3 },
      { x: cw / 2 + mw * 2, y: ch - mh * 3 },
      { x: cw / 2 + mw * 2, y: ch - mh * 2 },
      { x: cw / 2 + mw * 2, y: ch - mh },
    ]

    const model = this.model() as modelConstructor
    console.log(this.num())
    position.forEach((p) => {
      const instance = new model(p.x, p.y)
      this.models.push(instance)
    })
  }
}

export default new Wall('wall')
