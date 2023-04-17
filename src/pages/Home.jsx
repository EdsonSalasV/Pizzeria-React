import React, { useContext } from 'react'
import Pizza from './Pizza'
import { MyContext } from '../context/MyContext'

const Home = () => {

    const { data } = useContext(MyContext)


    return (
        <div className='m-1'>
            <div className='card'>
                <img className='img' src="https://img77.uenicdn.com/image/upload/v1578656056/business/69a769e7ef284f7e83579b47d6410ad2.jpg" alt="" />

            </div>
            <div className='row d-flex justify-content-center gap-5 m-2'>
                {data.map((pizza) => <Pizza key={pizza.id} pizza={pizza} />)}
            </div>
        </div>
    )
}

export default Home
