import bullet from '../canvas/bullet'
import config from '../config'
import { directionEnum } from '../enum/directionEnum'
import { image } from '../service/image'
import util from '../util'
import modelAbstract from './model'

export default class BulletModel extends modelAbstract implements IModel {
  canvas: ICanvas = bullet
  name: string = 'bullet'
  constructor(public tank: IModel) {
    super(tank.x + config.model.width / 2, tank.y + config.model.height / 2)
    this.direction = tank.direction as unknown as directionEnum
  }
  image(): HTMLImageElement {
    return image.get('bullet')!
  }
  render(): void {
    let x = this.x
    let y = this.y
    switch (this.direction) {
      case directionEnum.top:
        y -= config.dx
        break
      case directionEnum.right:
        x += config.dx
        break
      case directionEnum.bottom:
        y += config.dx
        break
      case directionEnum.left:
        x -= config.dx
        break
    }
    // 碰撞检测
    const touchModel = util.isBulletTouchModel(x, y, 2, 2)
    if (util.isBulletTouchCanvas(x, y, 2, 2)) {
      // 移除模型或卸载模型
      this.destroy()
    } else if (touchModel) {
      // 子弹模型消失
      this.destroy()
      // 碰撞到的模型消失
      // 不是白墙则卸载模型
      if (touchModel.name != 'steel') {
        touchModel.destroy()
      }
      // 爆炸
      this.blast(touchModel)
    } else{
      this.x = x
      this.y = y
      this.draw()
    }
  }

  protected draw()
  {
    this.canvas.ctx.drawImage(this.image(),this.x,this.y,4,4)
  }
}
