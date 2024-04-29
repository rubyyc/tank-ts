import boss from '../canvas/boss'
import { image } from '../service/image'
import modelAbstract from './model'

export default class BossModel extends modelAbstract implements IModel {
  canvas: ICanvas = boss
  name: string = 'boss'
  image(): HTMLImageElement {
    return image.get('boss')!
  }
  render(): void {
    super.draw()
  }
}
