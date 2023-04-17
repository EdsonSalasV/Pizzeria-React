import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext'
import { useParams } from 'react-router-dom'

const Detalles = () => {

    const { data, cart, setCart } = useContext(MyContext)


    const { id } = useParams()
    const pizzaDetail = data.find(item => item.id == id)

    const addPizza = (id) => {
        setCart([...cart, pizza])
    }


    console.log(id)


    return (
        <div className="card m-3" style={{ maxWidth: "1500px" }} key={pizzaDetail.id} >
            <div className="row g-0" >
                <div className="col-md-4">
                    <img src={pizzaDetail.img} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{pizzaDetail.name}</h5>
                        <p className="card-text">{pizzaDetail.desc}</p>
                        <ul className='list-unstyled'>
                            <li>🍕 {pizzaDetail.ingredients[0]}</li>
                            <li>🍕 {pizzaDetail.ingredients[1]}</li>
                            <li>🍕 {pizzaDetail.ingredients[2]}</li>
                            <li>🍕 {pizzaDetail.ingredients[3]}</li>
                        </ul>
                        <p><strong> $ {pizzaDetail.price} </strong></p>

                        <button className='btn btn-success m-2' onClick={() => addPizza(pizzaDetail.id)}>Añadir al carrito</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detalles
