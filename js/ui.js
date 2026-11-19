
const lastUpdate = document.getElementById("last-update");
const apiStatus = document.getElementById("api-status")
const apiMessage = document.getElementById("api-message");
const goldVariation = document.getElementById("variation");
const Svariation = document.getElementById("S_variation")

export function renderEstimatedValue(value, currency) {
    const result = document.getElementById("estimated-result");

    result.textContent = value.toFixed(2) + " " + currency;
}

export function renderCards(metalName, priceID, variationId) {
    const container = document.getElementById("price-cards");
    

    const card = document.createElement("div");
    card.className = "bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition";
    container.appendChild(card);

    const title = document.createElement("h3");
    title.className = "text-lg font-semibold mb-3";
    title.textContent = metalName;
    card.appendChild(title);

    const goldPrice = document.createElement("p");
    goldPrice.className = "text-3xl font-bold text-amber-600";
    goldPrice.id = priceID;
    goldPrice.textContent = "-- MAD/g";
    card.appendChild(goldPrice);

    const goldVariation = document.createElement("p");
    goldVariation.className = "text-sm text-gray-500 mt-2";
    goldVariation.id = variationId;
    goldVariation.textContent = "Variation : --";
    card.appendChild(goldVariation);
}


export function renderSvariation(defferance, percentage, currency){
    const Svariation = document.getElementById("SilverVariation")
    let color;
    let  arrow;

    if (defferance > 0) {
        color = "text-green-500";
        arrow = "↑";
    } else if (defferance < 0) {
        color = "text-red-500";
        arrow = "↓";
    } else {
        color = "text-gray-500";
        arrow = "→";
    }

    Svariation.classList.remove(
        "text-red-500",
        "text-green-500",
        "text-gray-500"
    );

    Svariation.classList.add(color)
    Svariation.textContent = `Variation: ${defferance.toFixed(2)}  ${currency}  ${arrow} (${percentage.toFixed(2)}) ` 
}


export function renderVariation(defferance, percentage, currency) {
    const goldVariation = document.getElementById("Goldvariation");
    let color;
    let  arrow;

    if (defferance > 0) {
        color = "text-green-500";
        arrow = "↑";
    } else if (defferance < 0) {
        color = "text-red-500";
        arrow = "↓";
    } else {
        color = "text-gray-500";
        arrow = "→";
    }
    
    goldVariation.classList.remove(
        "text-red-500",
        "text-green-500",
        "text-gray-500"
    );

    goldVariation.classList.add(color)
    
    goldVariation.textContent = `Variation: ${defferance.toFixed(2)}  ${currency}  ${arrow} (${percentage.toFixed(2)}) `
}


export function rederError(){
    apiMessage.textContent = "impossible de charger les prix. ⚠️";
    apiStatus.textContent = "Error.";
}


export function renderSeccus(){
    apiMessage.textContent = "Prix chargés avec succès. ✅";
    apiStatus.textContent = "Connecté.";
}


export function renderPrice(price, currency) {
    const goldMADprice = document.getElementById("orInMad");
    goldMADprice.textContent = price[0].toFixed(2) + "  " + currency +"/g";

    const silverMADprice = document.getElementById("SilverPrice");
    silverMADprice.textContent = price[1].toFixed(2) + "  " + currency +"/g"
}


export function lastTimeUpdate(timemStamp){

    const date = new Date(timemStamp);

    lastUpdate.textContent = date.toLocaleString("fr-FR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Africa/Casablanca"
    });
}


export function renderLoading(){
    apiMessage.textContent = "Chargement des prix...";

}