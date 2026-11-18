
import { getMetalPrice } from "./api.js";
import { renderPrice, lastTimeUpdate, renderLoading, renderSeccus, rederError , renderVariation, renderSvariation, renderCards} from "./ui.js"
const container = document.getElementById("price-cards");
const refreshBtn = document.getElementById("refresh-btn")
const currencySelect = document.getElementById("currency-select")

const savedCurrency = localStorage.getItem("currency") || "MAD";
currencySelect.value = savedCurrency;

currencySelect.addEventListener("change", (event) => {
    const selectedCurrency = event.target.value    

    localStorage.setItem("currency", selectedCurrency)
    
})





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

getMetalPrice(currencySelect.value).then((price) => {
    if (price === null){
        rederError()
        return;
    } 
    container.replaceChildren();

    price[7].forEach((metal) => {
        renderCards(metal.name, metal.id, metal.variationId);
    });
    renderPrice(price, currencySelect.value);
    lastTimeUpdate(price[2]);
    renderVariation(price[3], price[4]);
    renderSvariation(price[5], price[6]);
    renderSeccus();
    
})
