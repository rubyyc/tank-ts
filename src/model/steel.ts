import { image } from "../service/image";
import modelAbstract from "./model";

export default class SteelModel extends modelAbstract implements IModel{
  name: string = 'steel'
  image(): HTMLImageElement {
    return image.get('steel')!
  }
  render(): void {
    super.draw()
  }

}