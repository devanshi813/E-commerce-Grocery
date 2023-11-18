import React from 'react'
import "./Category.css" 

function Category() {
  return (
    <div className='Category'>
      <div className='Sub-category'>
        <h1>Featured Product</h1>
        <ul>
            <li><a href="/">All</a></li>
            <li><a href="/">Oranges</a></li>
            <li><a href="/">Fresh Meat</a></li>
            <li><a href="/">Vegetables</a></li>
            <li><a href="/">Fastfood</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Category
