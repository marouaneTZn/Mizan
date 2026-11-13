const MADprice = document.getElementById("orInMad");
const Madsilver = document.getElementById("silverInMad");
const lastUpdate = document.getElementById("last-update");
const apiMessage = document.getElementById("api-message")

import { getMetalPrice } from "./api.js";

getMetalPrice().then((price) => {
    if (price === null) return;

    MADprice.textContent = price[0].toFixed(2) + "   MAD/g"
    Madsilver.textContent = price[1].toFixed(2) + "   MAD/g"
    
    const date = new Date(price[2]);

    lastUpdate.textContent = date.toLocaleString("fr-FR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Africa/Casablanca"
    });
})
