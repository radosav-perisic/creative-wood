//For Adding an Item to Cart 
export const addToCart = (product) =>{
    return {
        type: 'ADDITEM',
        payload: product
    }
}
//For Deleting an Item from Cart 
export const deleteFromCart = (product) =>{
    return {
        type: 'DELITEM',
        payload: product
    }
}