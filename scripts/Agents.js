//Exported function to build and return render HTML
export const Agents = (AgentObject) => {
    return `
    <h2>${AgentObject.fullName}</h2>
    <div class="agentInfo">
        <div>${AgentObject.company}</div>
        <div>${AgentObject.phoneNumber}</div>
    </div>
    `
}