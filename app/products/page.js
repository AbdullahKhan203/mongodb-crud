// import React from 'react'

import './product.css'
import Modal from '../components/model/Modal';
import Button from '../components/button/Button';
import {productModel} from '../../model/products';

const fetchProducts=async()=>{
  try {
    const data=await productModel.find();
    console.log("data",data);
    return data;
  } catch (error) {
    console.log("Error",error);
  }
}


export default async function page() {
  const data=await fetchProducts()
    // const data = [
    //     { id: 1, name: 'John Doe', age: 28 },
    //     { id: 2, name: 'Jane Smith', age: 34 },
    //     { id: 3, name: 'Sam Johnson', age: 45 },
    //     { id: 4, name: 'Chris Lee', age: 19 },
    //   ];

  return (
    <>
      <Modal title="create product" heading="Products Crud"    status="Create Product" />
    <div className="table-container">
    <table className="styled-table">
      <thead>
        <tr>
          <th>ID</th> 
          <th>Product title</th>
          <th>product description</th>
          <th>product price</th>
          <th>update</th>
          <th>delete</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((item) => (
          <tr key={item.id}>
            <td>{item._id}</td>
            <td>{item.title}</td>
            <td>{item.description}</td>
            <td>{item.price}</td>
            <td><Modal product={item} isUpdate={true} title="update"   status="update" /></td>
            <td><Button id={item._id} title="delete" /></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  </>
  )
}
