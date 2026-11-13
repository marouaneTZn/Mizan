export async function getMetalPrice(){

    try{
        const response = await fetch("https://xaus.com/api/v1/spot");
        
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
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
    catch (error){
        console.error(error.message)
        return null
    }
}






