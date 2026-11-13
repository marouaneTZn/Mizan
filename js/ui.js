const MADprice = document.getElementById("orInMad");
const Madsilver = document.getElementById("silverInMad");
const lastUpdate = document.getElementById("last-update");
const apiStatus = document.getElementById("api-status")
const apiMessage = document.getElementById("api-message");

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