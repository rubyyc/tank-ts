import { image } from "../service/image";
import modelAbstract from "./model";

export default class WaterModel extends modelAbstract implements IModel{
  name: string = 'water'
  image(): HTMLImageElement {
    return image.get('water')!
  }
  render(): void {
    super.draw()
  }
}