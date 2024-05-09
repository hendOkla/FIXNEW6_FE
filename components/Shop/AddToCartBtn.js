import React from 'react'
import Link from 'next/link'
import { toast } from "react-hot-toast";
import { useDispatch } from 'react-redux'

const AddToCartBtn = ({ id }) => {
    // console.log(id)
    const dispatch = useDispatch()

    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            id
        })
        toast.success("Cart Added Successfully");
    }
    return (
        <>
            <Link href="#" onClick={e => {
                e.preventDefault();
                addToCart()
            }} className="add-to-cart-btn">Add to Cart</Link>
        </>
    )
}

export default AddToCartBtn
