
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
    
    getMetalPrice(selectedCurrency).then((price) => {
        if (price === null) {
            rederError();
            return;
        }
        renderPrice(price, selectedCurrency);
        renderVariation(price[3], price[4], selectedCurrency);
        renderSvariation(price[5], price[6], selectedCurrency);
    });
})





container.replaceChildren();




refreshBtn.addEventListener("click", () =>  {
    getMetalPrice(currencySelect.value).then((price) => {
    if (price === null){
        rederError()
        return;
    } 
    renderPrice(price, currencySelect.value);
    renderVariation(price[3], price[4], currencySelect.value);
    renderSvariation(price[5], price[6], currencySelect.value);
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
    renderVariation(price[3], price[4], currencySelect.value);
    renderSvariation(price[5], price[6], currencySelect.value);
    lastTimeUpdate(price[2]);
    renderSeccus();
    
})
