import React from 'react'
import CartList from "./CartList"
import { Routes,Route, Link, Outlet } from 'react-router-dom'

const CartContainer = () => {
    return (
        <div>
            <CartList />


            <Link to="cartDetail ">
            <p> Ver detalle del carrito</p>
            </Link>
            <Link to="orderForm ">
            <p> Start Order</p>
            </Link>
            
            <Outlet />
        </div>
    )
}

export default CartContainer
