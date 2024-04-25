import config from '../config'

type positionType = {x:number,y:number}

class Position {
  // 全局位置集合
  collection: positionType[]= []
  public getCollection(num: number) {
    const collection = [] as { x: number; y: number }[]

    for (let index = 0; index < num; index++) {
      while (true) {
        const position = this.position()

        const exists = this.collection.some(
          (c) => c.x == position.x && c.y == position.y
        )
        if (!exists) {
          collection.push(position)
          // 全局位置集合
          this.collection.push(position)
          break
        }
      }
    }
    return collection
  }

  public position() {
    return {
      x:
        Math.floor(Math.random() * (config.canvas.width / config.model.width)) *
        config.model.width,
      y:
        (Math.floor(
          Math.random() * (config.canvas.height / config.model.height - 5)
        ) +
          2) *
        config.model.height,
    }
  }
}

export default new Position()
