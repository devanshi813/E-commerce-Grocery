import React from 'react'
import Productinfo from './Productinfo'
import Card from './Card'
import "./Product.css"

function createCard(info){
    return (
    <Card 
    key =  {info.id}
    img = {info.imageUrl}
    name = {info.name}
    price = {info.price}
    />
    )
}

function Product() {
  return (
    <div className='card-grid'>
      {Productinfo.map(createCard)}
    </div>
  )
}

export default Product
