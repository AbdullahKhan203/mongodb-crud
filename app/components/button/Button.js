"use client"
import React from 'react'

export default function button(props) {
  
  const deleteHandler=async()=>{
try {
  const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "id": props.id
});

const requestOptions = {
  method: "DELETE",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

await fetch("http://localhost:3000/api/products", requestOptions)
alert("deleted successfully");
  // .then((response) => response.text())
  // .then((result) => console.log(result))
  // .catch((error) => console.error(error));
} catch (error) {
  console.log("Error",error);
}
  }
  return (
    <button onClick={deleteHandler}>{props.title}</button>
  )
}
