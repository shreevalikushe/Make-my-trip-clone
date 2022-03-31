
import React from 'react'
import HeaderP from './HeaderP'

import styleP from "./ProductPage.module.css"
import Card from "./Card"
import FilterC from './FilterC'
const ProductPage = () => {
  return (
    <>

    <div className={styleP.BigContainer}>

    <HeaderP/>

    <div className={styleP.All_product} >
    

       <FilterC/>
       <Card/>
       
      
    </div>

    </div>
   

    </>
  )
}

export default ProductPage