/// <reference types="vite/client" />

interface modelConstructor{
  new(canvas: CanvasRenderingContext2D,x:number,y:number): IModel
}

interface IModel{
  render(): void,
}

interface ICanvas{
  model(): modelConstructor,
  num(): number

}

