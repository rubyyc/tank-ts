import _ from "lodash";
import { directionEnum } from "../enum/directionEnum";
import { image } from "../service/image";
import modelAbstract from "./model";
import config from "../config";

export default class TankModel extends modelAbstract implements IModel{
  name: string = 'tank'

  render(): void {
    //super.draw()
    this.move()
  }

  protected move(): void {
    while (true) {
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

      if (this.isTouch(x, y) == true) {
        this.randomDirection()
      } else {
        this.x = x
        this.y = y
        break
      }
    }

    super.draw()
  }

  protected isTouch(x: number, y: number) {
    if (x < 0 ||
      x + this.width > config.canvas.width ||
      y < 0 ||
      y+this.height > config.canvas.height
    ) {
      return true
    }
  }



  image() {
    let direction = this.name + _.upperFirst(this.direction)
    //console.log(direction);
    return image.get(direction as keyof typeof config.images)!
  }

}