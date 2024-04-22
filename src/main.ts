import './style.scss'
import config from './config'
import straw from './canvas/straw'
import './service/image'
import { image, promises } from './service/image'

const app = document.querySelector<HTMLDivElement>('#app')!

app.style.width = config.canvas.width + 'px'
app.style.height = config.canvas.height + 'px'
app.style.height = config.canvas.height + 'px'

async function bootstrap()
{
  // 先加载贴图资源
  await Promise.all(promises)
  //console.log(image.get('straw'));
  console.log('here1')
  console.log(image.get('straw'))
  // 再渲染画布
  straw.render()
}

void bootstrap()
