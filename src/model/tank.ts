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
    switch (this.direction) {
      case directionEnum.top:
        this.y -= config.dx
        break
      case directionEnum.right:
        this.x += config.dx
        break
      case directionEnum.bottom:
        this.y += config.dx
        break
      case directionEnum.left:
        this.x -= config.dx
        break
    }
    super.draw()
  }


  image() {
    let direction = this.name + _.upperFirst(this.direction)
    //console.log(direction);
    return image.get(direction as keyof typeof config.images)!
  }

}