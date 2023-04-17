import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext'
import CartTotal from '../components/CartTotal'


const CartInfo = () => {

    const { cart } = useContext(MyContext)

    return cart.map((pizza) => {
        return (
            <div className='card m-3' style={{ maxWidth: "1500px" }} key={pizza.id}>
                <div className='row g-0'>
                    <div className='col-md-4'>
                        <img src={pizza.img}  className="img-fluid rounded-start" alt="" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className='card-title'><strong>{pizza.name}</strong></h1>
                            <h2 className='card-text'>$ {pizza.price}</h2>
                        </div>
                    </div>
                </div>
            </div>

        )
    })
}

export default CartInfo

