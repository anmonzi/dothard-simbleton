import { Business } from "./Business.js";
import { getBusinesses } from "./database.js";



const contentTarget = document.querySelector(".businessList--manufacturing")

export const ManufacturingList = () => {
    const businesses = getBusinesses()

    const filterManufacturingBusinesses = businesses.filter(business => business.companyIndustry === "Manufacturing")

    contentTarget.innerHTML = "<h1>Manufacturing Businesses</h1>"

    filterManufacturingBusinesses.forEach(business => contentTarget.innerHTML += Business(business))
}

//See NewYorkList.js for function description