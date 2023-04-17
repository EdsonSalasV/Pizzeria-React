import React, { useContext } from 'react'
import CartTotal from '../components/CartTotal'
import CartInfo from './CartInfo'

const Carrito = () => {

    return (
        <>
            <CartInfo />
            <CartTotal/>
        </>
    )
}

export default Carrito
