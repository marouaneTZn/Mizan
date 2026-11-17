
import { getMetalPrice } from "./api.js";
import { renderPrice, lastTimeUpdate, renderLoading, renderSeccus, rederError , renderVariation, renderSvariation, renderCards} from "./ui.js"

const refreshBtn = document.getElementById("refresh-btn")
const metals = [
    {name: "Or", id: "orInMad", variationId: "Goldvariation"},
    {name: "Argent", id: "SilverPrice", variationId: "SilverVariation"}
]

metals.forEach((metal) => {
    renderCards(metal.name, metal.id, metal.variationId)
})



refreshBtn.addEventListener("click", () =>  {
    getMetalPrice().then((price) => {
    if (price === null){
        rederError()
        return;
    } 
    renderPrice(price)
    lastTimeUpdate(price[2])
    renderVariation(price[3], price[4])
    renderSvariation(price[5],price[6])
    renderSeccus()
    
        
    })
})
renderLoading()

getMetalPrice().then((price) => {
    if (price === null){
        rederError()
        return;
    } 
    renderPrice(price);
    lastTimeUpdate(price[2]);
    renderVariation(price[3], price[4]);
    renderSvariation(price[5], price[6]);
    renderSeccus();
    
})
