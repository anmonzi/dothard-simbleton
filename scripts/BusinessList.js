import { getBusinesses } from "./database.js"
import { Business } from "./Business.js"


const companySearchResultArticle = document.querySelector(".foundCompanies")

document.querySelector("#companySearch").addEventListener("keypress", keyPressEvent => {
        if(keyPressEvent.key === "Enter") {
            //Referencing copy of data array
            const businesses = getBusinesses()

            //Saving text input from user and making it lowercase
            const enteredText = keyPressEvent.target.value.toLowerCase()
        
            //Iterating array with find to find a business whos company name includes user input
            const foundBusiness = businesses.find(business => business.companyName.toLowerCase().includes(enteredText))

            //Rendering search results to targeted element and passing found business through function to render business's info
            companySearchResultArticle.innerHTML = Business(foundBusiness)
        }
    }
)



// Function to find the FIRST candy that costs less than the specified amount
// export const findCandyBelowPrice = (priceCriteria) => {
//     const matchingCandy = candies.find(candy => candy.price < priceCriteria)

//     return matchingCandy
// }





//Targeting my section element with class .businesses and saving it to variable for reference
const contentTarget = document.querySelector(".businesses")

//Creating a function to iterate through array
export const BusinessList = () => {
    //Saving copy of array to variable for reference
    const businesses = getBusinesses()
    //Calling my section and inserting H1 HTML string
    contentTarget.innerHTML = "<h1>Active Businesses</h1>"

    //.forEach() on copy of array
    businesses.forEach(
        //For.. each callback function
        (business) => {
            //Calling my section and appending more HTML with Business function from other module
            contentTarget.innerHTML += Business(business)
        }
    );
}


// businesses.forEach(business => contentTarget.innerHTML += Business(business))  implicit return 
