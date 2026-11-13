
import { getMetalPrice } from "./api.js";
import { renderPrice } from "./ui.js"
import { lastTimeUpdate } from "./ui.js"
import { renderLoading } from "./ui.js"
import { renderSeccus } from "./ui.js"
import { rederError } from "./ui.js"


renderLoading()

getMetalPrice().then((price) => {
    if (price === null){
        rederError()
        return;
    } 
    
    renderPrice(price)
    lastTimeUpdate(price[2])
    renderSeccus()


})
