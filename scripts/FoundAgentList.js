import { Agents } from "./Agents.js"
import { getBusinesses } from "./database.js"


const agentSearchResultArticle = document.querySelector(".foundAgents")


document.querySelector("#agentFirstNameSearch").addEventListener("keypress", keyPressEvent => {
    if(keyPressEvent.key === "Enter") {
        const businesses = getBusinesses()

        const enteredText = keyPressEvent.target.value.toLowerCase()

        const findAgentsBusiness = businesses.find(business => 
            business.purchasingAgent.nameFirst.toLowerCase().includes(enteredText) ||
            business.purchasingAgent.nameLast.toLowerCase().includes(enteredText))

        const foundAgent = FoundAgent(findAgentsBusiness)

        const agentInfo = Agents(foundAgent)

        agentSearchResultArticle.innerHTML = agentInfo
    }
})




export const FoundAgent = (agentsBusiness) => {
    return {
        fullName: `${agentsBusiness.purchasingAgent.nameFirst} ${agentsBusiness.purchasingAgent.nameLast}`,
        company: agentsBusiness.companyName,
        phoneNumber: agentsBusiness.phoneWork
    }
}