//For Adding an Item to Cart 
export const addToCart = () =>{
    return {
        type: 'ADD',
        payload: product
    }
}
//For Deleting an Item from Cart 
export const deleteFromCart = () =>{
    return {
        type: 'DELETE',
        payload: product
    }
}