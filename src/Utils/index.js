/*
This function calculates Total Prices of a new order
Param type: Array --> products | cartProduct: Array of Objects
Return type: number TotalPrice
*/

export const totalPrice = (products) => {
    let storePrice = 0
    products.forEach(product => storePrice += product.price)
    return storePrice
}
