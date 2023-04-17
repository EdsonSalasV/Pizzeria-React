import React, { useEffect, useState } from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MyContext } from './context/MyContext'
import Detalles from './pages/Detalles'
import './App.css'
import Carrito from './pages/Carrito'


const App = () => {

  const [data, setData] = useState([])
  const [cart, setCart] = useState([])

  const api = "./src/data/data.json"

  const getData = async () => {
    const response = await fetch(api)
    let data = await response.json()

    data = data.map((pizza) => ({
      id: pizza.id,
      img: pizza.img,
      desc: pizza.desc,
      price: pizza.price,
      ingredients: pizza.ingredients,
      name: pizza.name,
    }));

    setData(data)


  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <div>
      <MyContext.Provider value={{data, cart, setCart}}>

        <BrowserRouter>

          <Navbar />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/detalles/:id' element={<Detalles/>} />
            <Route path='carrito' element={<Carrito/>}/>
            

         
          </Routes>
          
        </BrowserRouter>

      </MyContext.Provider>
    </div>
  )
}

export default App
