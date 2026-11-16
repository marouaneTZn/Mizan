const MADprice = document.getElementById("orInMad");
const Madsilver = document.getElementById("silverInMad");
const lastUpdate = document.getElementById("last-update");
const apiStatus = document.getElementById("api-status")
const apiMessage = document.getElementById("api-message");
const goldVariation = document.getElementById("variation");
const Svariation = document.getElementById("S_variation")

export function renderSvariation(defferance, percentage){
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

    Svariation.classList.add(color)
    Svariation.textContent = `Variation: ${defferance.toFixed(2)}  MAD  ${arrow} (${percentage.toFixed(2)}) ` 
    

}

export function renderVariation(defferance, percentage) {
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


    goldVariation.classList.add(color)
    
    goldVariation.textContent = `Variation: ${defferance.toFixed(2)}  MAD  ${arrow} (${percentage.toFixed(2)}) `
}

export function rederError(){
    apiMessage.textContent = "impossible de charger les prix. ⚠️";
    apiStatus.textContent = "Error.";
}

export function renderSeccus(){
    apiMessage.textContent = "Prix chargés avec succès. ✅";
    apiStatus.textContent = "Connecté.";
}

export function renderPrice(price){

    MADprice.textContent = price[0].toFixed(2) + " MAD/g"
    Madsilver.textContent = price[1].toFixed(2) + " MAD/g"
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