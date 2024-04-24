import './style.scss'
import config from './config'
import './service/image'
import { promises } from './service/image'
import wall from './canvas/wall'
import water from './canvas/water'
import straw from './canvas/straw'
import steel from './canvas/steel'

const app = document.querySelector<HTMLDivElement>('#app')!

app.style.width = config.canvas.width + 'px'
app.style.height = config.canvas.height + 'px'
app.style.height = config.canvas.height + 'px'

async function bootstrap()
{
  // 先加载贴图资源
  await Promise.all(promises)
  //console.log(image.get('straw'));
  // console.log('here1')
  // console.log(image.get('straw'))
  // 再渲染画布
  straw.render()
  // tank.render()
  wall.render()
  water.render()
  steel.render()

}

void bootstrap()
