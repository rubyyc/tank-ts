import { image } from "../service/image";
import modelAbstract from "./model";

export default class WallModel extends modelAbstract implements IModel{
  render(): void {
    super.draw(image.get('wall')!)
  }

}