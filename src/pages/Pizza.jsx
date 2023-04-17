import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext'
import { useNavigate } from 'react-router-dom'

const Pizza = ({ pizza }) => {

    const { data, cart, setCart } = useContext(MyContext)

    const addPizza = (id) => {

        setCart([...cart, pizza])

        console.log(id)
    }

    const navigate = useNavigate()
    const HandleClick = () => {
        navigate(`detalles/${pizza.id}`)
    }

    return (
        <div style={{ width: "25rem" }}>
            <div className='card col mb-3 text-center' key={pizza.id}>

                <h3><strong>{pizza.name}</strong></h3>

                <img src={pizza.img} alt='' />
                <p><strong> $ {pizza.price} </strong></p>
                <hr />
                <ul className='list-unstyled'>
                    <li>🍕 {pizza.ingredients[0]}</li>
                    <li>🍕 {pizza.ingredients[1]}</li>
                    <li>🍕 {pizza.ingredients[2]}</li>
                    <li>🍕 {pizza.ingredients[3]}</li>
                </ul>
                <div className='text-center'>
                    <button className='btn btn-primary m-2' onClick={HandleClick}>Detalles</button>
                    <button className='btn btn-success m-2' onClick={() => addPizza(pizza.id)}>Añadir al carrito</button>
                </div>
            </div>
        </div>
    )
}

export default Pizza
