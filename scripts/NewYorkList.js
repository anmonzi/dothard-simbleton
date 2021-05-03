import { Business } from "./Business.js"
import { getBusinesses } from "./database.js"

const contentTarget = document.querySelector(".businessList--newYork")

// Exported function that uses the .filter() array method with business as the callback function to filter businesses in NY, anything that returns true gets passed
export const NewYorkList = () => {
    //Grabbing copy of database array
    const businesses = getBusinesses()

    //Saving the return of the .filter() array method on the database array of businesses to variable with implicit return
    const filterNewYorkBusinesses = businesses.filter(business => business.addressStateCode === "NY")
    //Calling our target element to add H1 title
    contentTarget.innerHTML = "<h1>New York Businesses</h1>"

    //Using the forEach() array method on reference of saved NY business objects to render html to dom using imported Business function
    filterNewYorkBusinesses.forEach(business => contentTarget.innerHTML += Business(business))
}





//Function to filter businesses in NY that returns a boolean value
// const businessLocation = (businesses) => {
//     if (businesses.addressStateCode === "NY") {
//         return true
//     }
//     return false
// }


