import config from '../config'

type mapKey = keyof typeof config.images

export const image = new Map<mapKey, HTMLImageElement>()

// image.get('straw')

export const promises =  Object.entries(config.images).map(([key, value]) => {
  // 返回promise数组
  return new Promise(resolve => {
    const img = document.createElement('img')
    img.src = value

    img.onload = ()=>{
      image.set(key as mapKey,img)
      resolve(img)
    }
  })
})
