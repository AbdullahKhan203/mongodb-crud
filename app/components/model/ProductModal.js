"use client"
import React, { useState,useEffect } from 'react';
import '../../../style/ProductModal.css';

const ProductModal = ({ isOpen, onClose,status,isUpdate, product}) => {
  // const [products,setProducts]=useState({})
  // setProducts(product)
  console.log("product",product);
  
  const [formData,setFormData]=useState({
    title:"",
    description:"",
    price: "",
  })
  // const [productTitle, setProductTitle] = useState('');
  // const [productDescription, setProductDescription] = useState('');
  // const [productPrice, setProductPrice] = useState('');
  const [loading,setLoading]=useState(false)

  useEffect(() => {
    if (product) {
      setFormData({
        title: product.title || "",
        description: product.description || "",
        price: product.price || "",
      });
    }
  }, [product]);




  const postProductAPI=async()=>{
    try {
      setLoading(true)
      console.log("formData in postProductAPI",formData);
      const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  ...formData
});
// "title": "Iphone 75",
  // "description": "Mobile phone",
  // "price": 75

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

 const response=await fetch("http://localhost:3000/api/products", requestOptions)
 alert("Product created")
 setFormData({
  title:"",
  description:"",
  price:"",
})
 
            
      
  // .then((response) => response.text())
  // .then((result) => console.log(result))
  // .catch((error) => console.error(error));
    } catch (error) {
      console.log("error",error);
    }finally{
      setLoading(false)
    }

  }
  const updateProductAPI=async()=>{
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      
      const raw = JSON.stringify({
        "id": product._id,
        ...formData,
      });
      
      const requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };
      
     await fetch("http://localhost:3000/api/products", requestOptions)
     alert("Product updated")
 setFormData({
  title:"",
  description:"",
  price:"",
})
       
    } catch (error) {
      console.log("error",error);
    }finally{
      setLoading(false)
    }

  }





  if (!isOpen) {
    return null;
  }

  const handleChange=(e)=>{
    const value=e.target.value;
    const name=e.target.name;
   
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('form data:',formData);
    if(isUpdate){
      updateProductAPI();
    }else{
      postProductAPI();
    }


    onClose(); // Close the modal after submission
  };
   


  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>&times;</button>
        <form className="product-form" onSubmit={handleSubmit}>
          {/* <h2>{status == "Create Product" ? "Add Product" :"Update product"}</h2> */}
          <h2>{isUpdate ? "Update Product" :"Add product"}</h2>
          <div className="form-group">
            <label htmlFor="productTitle">Product Title:</label>
            <input
              type="text"
              value={formData.title}
              name='title'
              // onChange={(e) => setProductTitle(e.target.value)}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="productDescription">Product Description:</label>
            <textarea
              value={formData.description}
              name='description'
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="productPrice">Product Price:</label>
            <input
              type="number"
              value={formData.price}
              name='price'
              onChange={handleChange}
              required
            />
          </div>
          {loading ?
          <button type="submit" disabled>Loading ...</button>:
          <button type="submit">Submit</button>
        }
        </form>
      </div>
    </div>
  );
};

export default ProductModal;




















