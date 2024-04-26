import { image } from "../service/image";
import modelAbstract from "./model";

export default class WallModel extends modelAbstract implements IModel{
  name: string = 'wall'
  image(): HTMLImageElement {
    return image.get('wall')!
  }
  render(): void {
    super.draw()
  }

}