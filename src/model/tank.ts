import _ from 'lodash'
import { directionEnum } from '../enum/directionEnum'
import { image } from '../service/image'
import modelAbstract from './model'
import config from '../config'
import tank from '../canvas/tank'
import util from '../util'

export default class TankModel extends modelAbstract implements IModel {
  canvas: ICanvas = tank
  name: string = 'tank'

  render(): void {
    //super.draw()
    this.move()

    if (_.random(100) < 2) {
      this.direction = directionEnum.bottom
    }
  }

  protected move(): void {
    while (true) {
      let x = this.x
      let y = this.y
      const dx = config.dx * config.speed.tank
      switch (this.direction) {
        case directionEnum.top:
          y -= dx
          break
        case directionEnum.right:
          x += dx
          break
        case directionEnum.bottom:
          y += dx
          break
        case directionEnum.left:
          x -= dx
          break
      }

      if (util.isTankTouchModel(x, y) == true) {
        this.randomDirection()
      } else {
        this.x = x
        this.y = y
        break
      }
    }

    super.draw()
  }

  image() {
    let direction = this.name + _.upperFirst(this.direction)
    //console.log(direction);
    return image.get(direction as keyof typeof config.images)!
  }
}
