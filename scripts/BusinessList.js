import { getBusinesses } from "./database.js"
import { Business } from "./Business.js"

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