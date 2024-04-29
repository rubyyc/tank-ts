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

  bootstrap() {

  },

  stop() {

  },

  async start() {
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
  }
}
