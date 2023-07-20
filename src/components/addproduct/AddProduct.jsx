
"use client"
import React, { useState } from 'react'
import styles from "./addProduct.module.css"


export default function AddProduct() {

  const [credentials, setcredentials] = useState({name:"",quantity:0,price:0})

  const [error, setError] = useState(false)
    const handleSubmit=async(e)=>{
      e.preventDefault()
try {
  

      const response=await fetch("/api/products",{
        method:"POST",
        headers:{
          "Content-type":"application/json"
        },
        body:JSON.stringify({name:credentials.name,quantity:credentials.quantity,price:credentials.price})

      })
      if(response.ok){
        const data=await response.json()
        console.log(data)
        setcredentials({name:"",quantity:0,price:0})
      }
     
    }
      catch (error) {
  setError(true)
      }
    }

    const handleChange=async(e)=>{
      setcredentials({...credentials,[e.target.name]:e.target.value})
     
    }
  return (
    <div className={styles.addProduct}>
      <h1 className={styles.heading}> Add Product Here</h1>
      <div  className={styles.item}>
         <label htmlFor="">Product Name</label>
         <input onChange={handleChange} type="text" name="name" id=""  value={credentials.name}/>
      </div> 
      <div className={styles.item} >
         <label htmlFor="">Product Quantity</label>
         <input onChange={handleChange} type="number" name="quantity" id=""  value={credentials.quantity} />
      </div>
      <div className={styles.item} >
         <label htmlFor="">Product Price</label>
         <input onChange={handleChange} type="number" name="price" id="" value={credentials.price} />
      </div>
      <div className={styles.Btn}>

       <button className={styles.addBtn} onClick={handleSubmit}>Add Product</button>
      </div>
    </div>
  )
}
