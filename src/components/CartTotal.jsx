import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext'

const CartTotal = () => {

    const { cart } = useContext(MyContext)

    const total = cart.reduce((acc, el) => acc + el.price, 0)

    return cart.length > 0 ? (
        <div className='text-center'>
            <h3>Total a pagar: $ {total}</h3>
        </div>    
    ):(
        <h2 className='text-center'>Aun no llevas ninguna Pizza</h2>
    )
}

export default CartTotal
