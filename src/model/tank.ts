import _ from "lodash";
import { directionEnum } from "../enum/directionEnum";
import { image } from "../service/image";
import modelAbstract from "./model";
import config from "../config";
import water from "../canvas/water";
import wall from "../canvas/wall";
import steel from "../canvas/steel";

export default class TankModel extends modelAbstract implements IModel{
  name: string = 'tank'

  render(): void {
    //super.draw()
    this.move()

    if (_.random(10) < 2) {
      this.direction = directionEnum.bottom
    }
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

  protected isTouch(x: number, y: number): boolean {
    // 碰到边界了
    if (x < 0 ||
      x + this.width > config.canvas.width ||
      y < 0 ||
      y+this.height > config.canvas.height
    ) {
      return true
    }

    // 碰到墙,水
    const models = [...water.models, ...wall.models, ...steel.models]
    return models.some(model => {
      const state =
        x + this.width <= model.x ||
        y + this.height <= model.y ||
        x  >= model.x + model.width ||
        y >= model.y + model.height

        return !state
    })
  }



  image() {
    let direction = this.name + _.upperFirst(this.direction)
    //console.log(direction);
    return image.get(direction as keyof typeof config.images)!
  }

}