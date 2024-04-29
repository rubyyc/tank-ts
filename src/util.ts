import boss from "./canvas/boss"
import player from "./canvas/player"
import steel from "./canvas/steel"
import wall from "./canvas/wall"
import water from "./canvas/water"
import config from "./config"

export default {
  // 检测子弹碰撞墙和边界
  isBulletTouchCanvas(x: number, y: number,width = config.model.width,height = config.model.height): boolean {
    // 碰到边界了
    if (x < 0 ||
      x + width> config.canvas.width ||
      y < 0 ||
      y+height > config.canvas.height
    ) {
      return true
    }
    return false
  },

  // 检测子弹打在哪个模型上并返回
  isBulletTouchModel(x: number, y: number, width = config.model.width, height = config.model.height, models =[...wall.models, ...steel.models,...boss.models, ...player.models]): IModel | undefined {
    // 碰到墙,水
    return models.find(model => {
      const state =
        x + width <= model.x ||
        y + height <= model.y ||
        x  >= model.x + model.width ||
        y >= model.y + model.height

        return !state
    })
  },
  // 检测所有坦克是否触碰模型
  isTankTouchModel(x: number, y: number,width = config.model.width,height = config.model.height,models = [...water.models, ...wall.models, ...steel.models,...boss.models]): boolean {
    // 碰到边界了
    if (x < 0 ||
      x + width> config.canvas.width ||
      y < 0 ||
      y+height > config.canvas.height
    ) {
      return true
    }

    // 碰到墙,水
    return models.some(model => {
      const state =
        x + width <= model.x ||
        y + height <= model.y ||
        x  >= model.x + model.width ||
        y >= model.y + model.height

        return !state
    })
  }
}