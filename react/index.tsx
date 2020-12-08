import { canUseDOM } from 'vtex.render-runtime'

import { PixelMessage } from './typings/events'

export function handleEvents(e: PixelMessage) {

  //console.log("MESSAGES:", e)

  switch (e.data.eventName) {
    case "vtex:categoryView": {
      const categoryLength = e.data.products[0].categories.length
      const category = e.data.products[0].categories[categoryLength-1].split("/");
      window.dataLayer.push({
        page: "category",
        category: {
          name: category[2] 
        }
      });
      console.log("CATEGORY_NAME", category[2])
      break;
    }
    default: {
      break
    }
  }
}

if (canUseDOM) {
  window.addEventListener('message', handleEvents)
}
