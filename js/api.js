async function getMetalPrice(){
    const response = await fetch('https://xaus.com/api/v1/spot')
    const data = await response.json()

    const goldPriceMAD  = (data.fx_rates.MAD * data.xau.price) / 31.1035
    const selverMadPrice = (data.silver_usd_oz * data.fx_rates.MAD) / 31.1035
    const lastUpdate = data.updated_at
    

    
    return [
        goldPriceMAD,
        selverMadPrice,
        lastUpdate
    ]
}

const MADprice = document.getElementById("orInMad");
const Madsilver = document.getElementById("silverInMad");
const lastUpdate = document.getElementById("last-update");

getMetalPrice().then((price) => {
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



