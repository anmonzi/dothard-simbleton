import { Agents } from "./Agents.js"
import { getBusinesses } from "./database.js"
import { FoundAgent } from "./FoundAgentList.js"


const contentTarget = document.querySelector(".agents")



export const AgentList = () => {
    const businesses = getBusinesses()

    const onlyAgents = businesses.map((business) => {
            return {
                fullName: `${business.purchasingAgent.nameFirst} ${business.purchasingAgent.nameLast}`,
                company: business.companyName,
                phoneNumber: business.phoneWork
            }
        }
    )

    contentTarget.innerHTML = "<h1>Purchasing Agents</h1>"

    onlyAgents.forEach(agent => {contentTarget.innerHTML += Agents(agent)})
}
