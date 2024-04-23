import config from '../config'

export default abstract class CanvasAbstract {
  protected items = []
  abstract render(): void

  constructor(
    protected app = document.querySelector('#app') as HTMLDivElement,
    protected el = document.createElement('canvas'),
    protected canvas = el.getContext('2d')!
  ) {
    this.createCanvas()
  }

  protected createCanvas() {
    this.el.width = config.canvas.width
    this.el.height = config.canvas.height

    // this.canvas.fillStyle = '#16a085'
    // this.canvas.fillRect(0,0,config.canvas.width,config.canvas.height)

    this.app.insertAdjacentElement('afterbegin', this.el)
  }

  protected drawModels(num: number,model: modelConstructor) {
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
    this.positionCollection(num).forEach(() => {
      const position = this.position()
      const instance = new model(this.canvas,position.x,position.y)
      instance.render()
    })
  }

  protected positionCollection(num: number) {
    const collection = [] as { x: number; y: number }[]

    for (let index = 0; index < num; index++) {
      while (true) {
        const position = this.position()

        const exists = collection.some(
          (c) => c.x == position.x && c.y == position.y
        )
        if (!exists) {
          collection.push(position)
          break
        }
      }
    }
    return collection
  }

  protected position() {
    return {
      x:
        Math.floor(Math.random() * (config.canvas.width / config.model.width)) *
        config.model.width,
      y:
        Math.floor(
          Math.random() * (config.canvas.height / config.model.height)
        ) * config.model.height,
    }
  }
}
