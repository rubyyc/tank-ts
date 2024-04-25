import _ from "lodash";
import { directionEnum } from "../enum/directionEnum";
import { image } from "../service/image";
import modelAbstract from "./model";
import config from "../config";

export default class TankModel extends modelAbstract implements IModel{
  name: string = 'tank'
  protected direction: directionEnum = directionEnum.top
  render(): void {
    this.randomDirection()
    super.draw(this.randImage())
  }

  randomDirection() {
    this.direction = Object.keys(directionEnum)[Math.floor(Math.random()*4)] as directionEnum
  }

  randImage() {
    let direction = this.name + _.upperFirst(this.direction)
    console.log(direction);
    return image.get(direction as keyof typeof config.images)!
  }

}