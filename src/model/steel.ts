import steel from "../canvas/steel";
import { image } from "../service/image";
import modelAbstract from "./model";

export default class SteelModel extends modelAbstract implements IModel{
  canvas: ICanvas = steel
  name: string = 'steel'
  image(): HTMLImageElement {
    return image.get('steel')!
  }
  render(): void {
    super.draw()
  }

}