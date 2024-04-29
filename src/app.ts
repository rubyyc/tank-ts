import './style.scss'
import config from './config'
import './service/image'
import { promises } from './service/image'
import wall from './canvas/wall'
import water from './canvas/water'
import straw from './canvas/straw'
import steel from './canvas/steel'
import tank from './canvas/tank'
import player from './canvas/player'
import bullet from './canvas/bullet'
import boss from './canvas/boss'

const app = document.querySelector<HTMLDivElement>('#app')!

app.style.width = config.canvas.width + 'px'
app.style.height = config.canvas.height + 'px'
app.style.height = config.canvas.height + 'px'

export default {
  isStart: false,
  state: 9,
  interval: null as any,

  bootstrap() {
    app.addEventListener('click', async () => {
      if (this.isStart == true || this.state != 9) {
        console.log('true')
        return
      }
      console.log('重复绑定')
      await this.start()
      this.interval = setInterval(() => {
        if (tank.models.length == 0) {
          this.state = 1
        }

        if (player.models.length == 0 || boss.models.length == 0) {
          this.state = 0
        }

        if (this.state != 9) {
          this.stop()
        }
      }, 100) as any
    })
  },

  stop() {
    clearInterval(this.interval)
    tank.stop()
    bullet.stop()
    this.isStart = false
    console.log('结束')
  },

  async start() {
    this.state = 9
    if (this.isStart) {
      return
    }
    this.isStart = true
    app.style.backgroundImage = 'none'
    // 先加载贴图资源
    await Promise.all(promises)
    //console.log(image.get('straw'));
    // console.log('here1')
    // console.log(image.get('straw'))
    // 再渲染画布
    straw.render()
    wall.render()
    water.render()
    steel.render()
    tank.render()
    bullet.render()
    boss.render()
    player.render()
  },
}
