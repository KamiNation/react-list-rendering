import Product from './components/Product'
import './App.css'
import { useState } from 'react'

function App() {
  const collections = [
    {
      productName: "Tiger",
      productPrice: 4000,
      productImage: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/12/0371622/1.jpg?5890"
    },

    {
      productName: "Mikano",
      productPrice: 8000,
      productImage: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/98/2474621/1.jpg?4910"
    },

    {
      productName: "Tiger Generator",
      productPrice: 8777,
      productImage: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/15/0749891/1.jpg?1834"
    },

    {
      productName: "Worka",
      productPrice: 40000,
      productImage: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/53/7917322/1.jpg?9021"
    },

    {
      productName: "Cchub",
      productPrice: 40007,
      productImage: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/50/581697/1.jpg?9723"
    }]


  const [logged, setLog] = useState(false)

  const btnToggle = () => {
    const presentState = logged
    setLog(!presentState)
  }

  return (
    <>
      <h1>Product Page</h1> <br /> <br />
      <button onClick={() => btnToggle()}> {logged ? 'Log In' : 'Log Out'} </button>
      <div className='map-wrap'>
{/* 
      {
          logged ? "User is logged In" : 'User is logged out'
        } */}

        {
          logged? collections.map((element) => {return (
            <div className='card'>
              <Product productImage={element.productImage} productName={element.productName} productPrice={element.productPrice}  ></Product>
            </div>
      
          )})
          : "Please Log In"
        }


      </div>

    </>
  )

}

export default App


