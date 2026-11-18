
export async function getMetalPrice(currency = "MAD") {
    try {
    
        const S_historyResponse = await fetch("https://xaus.com/api/v1/chart?symbol=silver&range=5d&interval=1d&utm_source=chatgpt.com");
        const S_historyData = await S_historyResponse.json();
        const S_lastDay = S_historyData.points[S_historyData.points.length - 1];


        const historyResponse = await fetch("https://xaus.com/api/v1/history");
        const historyData = await historyResponse.json();
        const lastDay = historyData.points[historyData.points.length - 1];


        
        const response = await fetch("https://xaus.com/api/v1/spot");


        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();
        let exchangeRate;
        if (currency === "USD"){
            exchangeRate = 1;
        }
        else
        {
            exchangeRate = data.fx_rates[currency]
        }

        const metals = [
            {
                name: "Or",
                price: data.xau.price,
                id: "orInMad",
                variationId: "Goldvariation"
            },
            {
                name: "Argent",
                price: data.silver_usd_oz,
                id: "SilverPrice",
                variationId: "SilverVariation"
            }
        ];

        const goldPriceMAD = (exchangeRate * data.xau.price) / 31.1035;
        const selverMadPrice = (exchangeRate * data.silver_usd_oz) / 31.1035;
        


        
        const S_closeMad = (S_lastDay.c * exchangeRate) / 31.1035;
        const S_difference = selverMadPrice - S_closeMad;



        
        const lastUpdate = data.updated_at;


        
        const goldCloseMAD = (lastDay.c * exchangeRate) / 31.1035;
        const difference = goldPriceMAD - goldCloseMAD;

        

        const goldPercentage = (difference / goldCloseMAD) * 100;

        const selverPercentage = (S_difference / S_closeMad) * 100

        
        return [
            goldPriceMAD,
            selverMadPrice,
            lastUpdate,
            difference,
            goldPercentage,
            S_difference,
            selverPercentage,
            metals
        ];

    } catch (error) {
        console.error(error.message);
        return null;
    }
}
