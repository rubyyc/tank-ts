import _ from 'lodash'
import { directionEnum } from '../enum/directionEnum'
import { image } from '../service/image'
import modelAbstract from './model'
import config from '../config'
import player from '../canvas/player'
import util from '../util'
import bullet from '../canvas/bullet'
import audio from '../service/audio'
import app from '../app'

export default class PlayerModel extends modelAbstract implements IModel {
  canvas: ICanvas = player
  name: string = 'player'
  bindEvent: boolean = false

  render(): void {
    super.draw()
    if (this.bindEvent == false) {
      this.bindEvent = true
      document.addEventListener('keydown', this.changeDirection.bind(this))
      document.addEventListener('keydown', _.throttle(this.shot.bind(this),1000))
    }
  }

  protected shot(event: KeyboardEvent) {
    if (app.isStart == false) {
      return
    }
    // console.log(event.code)
    if(event.code == 'Space') {
        console.log('发射')
        bullet.addPlayerBullet()
        audio.fire()
    }
  }

  protected changeDirection(event: KeyboardEvent) {
    if (app.isStart == false) {
      return
    }
    // console.log(event.code)
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
    const dx = config.dx * config.speed.player
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
      // 碰到啥也不做
      this.canvas.renderModels()
      return
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
