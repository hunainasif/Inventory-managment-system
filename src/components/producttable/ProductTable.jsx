"use client"
import React, { useEffect, useState } from 'react'
import styles from "./productTable.module.css"

export default function ProductTable() {
    const [products,setProducts]=useState([])

    const [error, setError] = useState(false)

    const deleteProduct=async(id)=>{
        console.log(id)
        const response=await fetch(`/api/products/${id}`,{
            method:"DELETE",
            headers:{
                "Content-type":"application/json"
            }
        })
        if(response.ok){
          const newProducts  =products.filter((item)=>{
                return item._id !== id
            })
            setProducts(newProducts)
        }
        else{
            setError(true)
        }
    }
    const getProducts=async()=>{
        const response=await fetch("/api/products")
        if(response.ok){
            const data=await response.json()
            console.log(data)
            setProducts(data)
        }else{
            setError(true)
        }
    }
    useEffect(()=>{
        getProducts()
    },[])
  return (
    <div className={styles.productTable}>
        
        <table>
            <thead>
                <tr>
                    <th>Index</th>
                    <th>Product Name</th>
                    <th>Product Quantity</th>
                    <th>Product Price</th>
                    <th>Total Value</th>
                    <th>Actions</th>
                    <th>Deletetion/updation</th>
                </tr>
            </thead>
            <tbody>
             {
              products &&  products.map((product,index)=>{
                    return <tr key={product._id}>
                    <td>{index+1}</td>
                    <td>{product.name}</td>
                    <td>{product.quantity}</td>
                    <td><span>$</span>{product.price}</td>
                    <td><span>$</span>{(product.price) *( product.quantity)}</td>
                    <td style={{display:"flex",alignItems:"center",justifyContent:"center"}} ><button className={styles.actionBtn}>-</button> 
                    <button className={styles.actionBtn}>+</button></td>
                    <td><button className={styles.deleteBtn} onClick={()=>{deleteProduct(product._id)}}>delete</button></td>
                   
                </tr>
                })
             }   
                 
                 
            </tbody>
        </table>
       
    </div>
  )
}
