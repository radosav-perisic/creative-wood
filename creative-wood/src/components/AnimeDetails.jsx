import React from 'react'
import { useParams } from 'react-router'
import { useState } from 'react';
import PROUDUCTSDATA from "../products.json"
import { useDispatch } from 'react-redux';
import {addToCart, deleteFromCart} from '../redux/actions/index'

const ProductDetail = () => {
    const [cartBtn, setCartBtn] = useState("Add to Cart")

    const proid = useParams();
    const proDetail = PROUDUCTSDATA.filter(x=>x.id == proid.id)
    const product = proDetail[0];

    const dispatch = useDispatch()

    const handleCart = (product) => {
        if (cartBtn === "Add to Cart") {
            dispatch(addToCart(product))
            setCartBtn("Remove from Cart")
        }
        else{
            dispatch(deleteFromCart(product))
            setCartBtn("Add to Cart")
        }
    }

    return (
        <>
        <div className="container my-5 py-3">
            <div className="flex flex-row">
                <div className="md:w-1/2 flex justify-center mx-auto">
                    <img src={product.img} alt={product.title} height="400px" />
                </div>
                <div className="md:w-1/2 flex flex-col justify-center">
                    <h1 className="text-xl font-bold">{product.title}</h1>
                    <hr />
                    <h2 className="my-4">${product.price}</h2>
                    <p className="font-lg">{product.desc}</p>
                    <button onClick={()=>handleCart(product)} className="btn btn-outline-primary my-5">{cartBtn}</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductDetail