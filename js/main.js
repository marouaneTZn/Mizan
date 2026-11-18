
import { getMetalPrice } from "./api.js";
import { renderPrice, lastTimeUpdate, renderLoading, renderSeccus, rederError , renderVariation, renderSvariation, renderCards} from "./ui.js"
const container = document.getElementById("price-cards");
const refreshBtn = document.getElementById("refresh-btn")




container.replaceChildren();




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
    container.replaceChildren();

    price[7].forEach((metal) => {
        renderCards(metal.name, metal.id, metal.variationId);
    });
    renderPrice(price);
    lastTimeUpdate(price[2]);
    renderVariation(price[3], price[4]);
    renderSvariation(price[5], price[6]);
    renderSeccus();
    
})
