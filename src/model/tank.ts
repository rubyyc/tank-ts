import { image } from "../service/image";
import modelAbstract from "./model";

export default class TankModel extends modelAbstract implements IModel{
  render(): void {
    super.draw(image.get('tank')!)
  }

}