/// <reference types="vite/client" />

interface modelConstructor {
  new (x: number, y: number): IModel
}

interface bulletModelConstructor {
  new (tank: IModel): IModel
}

interface IModel {
  render(): void
  tank?: IModel
  x: number
  y: number
  width: number,
  height: number
  image(): HTMLImageElement,
  direction: string
}

interface ICanvas {
  model(): modelConstructor | bulletModelConstructor
  num(): number
  ctx: CanvasRenderingContext2D,
  removeModel(model:IModel):void
}
