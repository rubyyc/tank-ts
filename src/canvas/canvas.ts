import config from '../config'
import position from '../service/position'

export default abstract class CanvasAbstract {
  public models:IModel[] = []
  abstract render(): void
  abstract num(): number
  abstract model(): modelConstructor | bulletModelConstructor

  constructor(
    protected name: string,
    protected app = document.querySelector('#app') as HTMLDivElement,
    protected el = document.createElement('canvas'),
    public ctx = el.getContext('2d')!
  ) {
    this.createCanvas()
  }

  // 创建画布
  protected createCanvas() {
    this.el.width = config.canvas.width
    this.el.height = config.canvas.height
    this.el.setAttribute('name',this.name)

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
    const model = this.model() as modelConstructor
    console.log(this.num());
    position.getCollection(this.num()).forEach((p) => {
      const instance = new model(p.x, p.y)
      this.models.push(instance)
    })
  }

  // 将models渲染到画布上
  public renderModels()
  {
    this.ctx.clearRect(0,0,config.canvas.width,config.canvas.height)
    this.models.forEach(model => {
      model.render()
    })
  }

  public removeModel(model: IModel) {
    this.models = this.models.filter(m => m != model)
  }
}
