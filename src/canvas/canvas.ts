import config from '../config'
import imgUrl from '../static/images/straw/straw.png'

export default abstract class CanvasAbstract {
  protected items = []
  constructor(
    protected app = document.querySelector('#app') as HTMLDivElement,
    protected el = document.createElement('canvas'),
    protected canvas = el.getContext('2d')!
  ) {
    this.createCanvas()
    this.drawModels()
  }

  protected createCanvas() {
    this.el.width = config.canvas.width
    this.el.height = config.canvas.height

    // this.canvas.fillStyle = '#16a085'
    // this.canvas.fillRect(0,0,config.canvas.width,config.canvas.height)

    this.app.insertAdjacentElement('afterbegin', this.el)
  }

  protected drawModels() {
    const img = document.createElement('img')
    img.src = imgUrl
    img.onload = () => {
      const position = this.position()
      this.canvas.drawImage(img, position.x, position.y, config.model.width, config.model.height)
    }
  }

  protected position() {
    return {
      x: 200,
      y: 300,
    }
  }
}
