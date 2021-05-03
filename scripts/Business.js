//Exported function to build and return render HTML
export const Business = (businessObject) => {
    return `
    <h2>${businessObject.companyName}</h2>
    <div class="companyAddress">
        <div>${businessObject.addressFullStreet}</div>
        <div>${businessObject.addressCity}, ${businessObject.addressStateCode}${businessObject.addressZipCode}
        </div>
    </div>
    `
}