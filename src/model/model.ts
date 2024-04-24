import config from "../config";
import { image } from "../service/image";

export default abstract class modelAbstract {
  abstract render():void
  constructor(
    protected canvas: CanvasRenderingContext2D,
    protected x: number,
    protected y: number
  ) {
  }

  protected draw(img:HTMLImageElement)
  {
    this.canvas.drawImage(img,this.x,this.y,config.model.width,config.model.height)
  }
}
