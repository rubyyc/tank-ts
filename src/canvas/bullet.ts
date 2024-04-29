import BulletModel from '../model/bullet'
import CanvasAbstract from './canvas'
import player from './player';
import tank from './tank';

class Bullet extends CanvasAbstract implements ICanvas{

  num(): number {
    return 0
  }
  model(): bulletModelConstructor {
    return BulletModel
  }

  render(): void {
    // super.createModels()
    // super.renderModels()
    setInterval(
      ()=>{
        this.createBullet()
        this.renderModels()
      }
    ,20)
  }

  createBullet() {
    // console.log(1);
    tank.models.forEach(tank => {
      const isExists = this.models.some(m => m.tank == tank)
      if (!isExists) {
        this.models.push(new BulletModel(tank))
      }
    })
    // console.log(this.models);
  }

  addPlayerBullet() {
    this.models.push(new BulletModel(player.models[0]))
  }

}

export default new Bullet('bullet')
