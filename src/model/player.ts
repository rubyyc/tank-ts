import _ from 'lodash'
import { directionEnum } from '../enum/directionEnum'
import { image } from '../service/image'
import modelAbstract from './model'
import config from '../config'
import player from '../canvas/player'
import util from '../util'

export default class PlayerModel extends modelAbstract implements IModel {
  canvas: ICanvas = player
  name: string = 'player'

  render(): void {
    super.draw()

    document.addEventListener('keydown', this.changeDirection.bind(this))
  }

  protected changeDirection(event: KeyboardEvent) {
    console.log(event.code)
    switch (event.code) {
      case 'ArrowUp':
        this.direction = directionEnum.top
        this.move()
        break
      case 'ArrowRight':
        this.direction = directionEnum.right
        this.move()
        break
      case 'ArrowDown':
        this.direction = directionEnum.bottom
        this.move()
        break
      case 'ArrowLeft':
        this.direction = directionEnum.left
        this.move()
        break
    }
  }

  protected move(): void {
    //while (true) {
      let x = this.x
      let y = this.y
      switch (this.direction) {
        case directionEnum.top:
          y -= config.dx*4
          break
        case directionEnum.right:
          x += config.dx*4
          break
        case directionEnum.bottom:
          y += config.dx*4
          break
        case directionEnum.left:
          x -= config.dx*4
          break
      }

      if (util.isTankTouchModel(x, y) == true) {
      } else {
        this.x = x
        this.y = y
        this.canvas.renderModels()
      }
    //}

    //super.draw()
  }

  image() {
    let direction = this.name + _.upperFirst(this.direction)
    //console.log(direction);
    return image.get(direction as keyof typeof config.images)!
  }
}