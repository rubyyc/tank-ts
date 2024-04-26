import config from '../config'
import position from '../service/position'
import { image } from '../service/image';

export default abstract class CanvasAbstract {
  protected models:IModel[] = []
  abstract render(): void
  abstract num(): number
  abstract model(): modelConstructor

  constructor(
    protected app = document.querySelector('#app') as HTMLDivElement,
    protected el = document.createElement('canvas'),
    protected canvas = el.getContext('2d')!
  ) {
    this.createCanvas()
  }

  // 创建画布
  protected createCanvas() {
    this.el.width = config.canvas.width
    this.el.height = config.canvas.height

    // this.canvas.fillStyle = '#16a085'
    // this.canvas.fillRect(0,0,config.canvas.width,config.canvas.height)

    this.app.insertAdjacentElement('afterbegin', this.el)
  }

  // 创建models实例
  protected createModels(){
    // 重构前
    /*
    const img = document.createElement('img')
    img.src = imgUrl
    img.onload = () => {
      const position = this.position()
      this.canvas.drawImage(img, position.x, position.y, config.model.width, config.model.height)
    }
    */

  // 重构后
    const model = this.model()
    console.log(this.num());
    position.getCollection(this.num()).forEach((p) => {
      const instance = new model(this.canvas, p.x, p.y)
      this.models.push(instance)
    })
  }

  // 将models渲染到画布上
  protected renderModels()
  {
    this.models.forEach(model => {
      model.render()
    })
  }
}
