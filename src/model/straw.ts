import { image } from "../service/image";
import modelAbstract from "./model";

export default class StrawModel extends modelAbstract implements IModel{
  name: string = 'straw'
  image(): HTMLImageElement {
    return image.get('straw')!
  }
  render(): void {
    super.draw()
  }

}