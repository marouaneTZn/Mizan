export async function getMetalPrice(){
    
    const apiStatus = document.getElementById("api-status")
    const apiMessage = document.getElementById("api-message");
    apiMessage.textContent = "Chargement des prix...";
    
    try{

        const response = await fetch("https://xaus.com/api/v1/spot");
        
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        const data = await response.json()
        apiStatus.textContent = "Connecté."
    
        const goldPriceMAD  = (data.fx_rates.MAD * data.xau.price) / 31.1035
        const selverMadPrice = (data.silver_usd_oz * data.fx_rates.MAD) / 31.1035
        const lastUpdate = data.updated_at

        const apiMessage = document.getElementById("api-message")
        apiMessage.textContent = "Prix chargés avec succès.    ✅";
        
        return [
            goldPriceMAD,
            selverMadPrice,
            lastUpdate
        ]
    }
    catch (error){
        apiMessage.textContent = "Erreur : impossible de charger les prix.    ⚠️"
        apiStatus.textContent = "Erreur"

        return null
        
    }
}






