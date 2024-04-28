import straw from '../canvas/straw'
import { image } from '../service/image'
import modelAbstract from './model'

export default class StrawModel extends modelAbstract implements IModel {
  canvas: ICanvas = straw
  name: string = 'straw'
  image(): HTMLImageElement {
    return image.get('straw')!
  }
  render(): void {
    super.draw()
  }
}
