"use client"
import React, { useEffect, useState } from 'react'
import mongoose from 'mongoose'
import dbConnect from '@/config/db'
import { userModel } from '@/model/user';

// dbConnect();   
//    const fetchDocs=async()=>{
//     try {
//         const user =await userModel.find();
//         console.log("user are",user);
//         return user;
        
//     } catch (error) {
//         console.log("error in contact",error);
//     }
      
//    }

export default function page() {
//  const user=await fetchDocs();
const [data,setData]=useState([])
console.log(data);

const fetchUsers=async()=>{
  const response=await fetch("http://localhost:3000/api/profiles");
  const result=await response.json()
  setData(result.user)
  console.log("result",result);
}


useEffect(()=>{
  fetchUsers();
},[])
   return (
    <div>
        <h1>Contact page</h1>
       {data.map((item,i)=>{
        return(
         <div>
          <div key={i} >{item.firstName}-{item.lastName}</div>
         </div>
        )
       })}
    </div>
  )
}






// import React, { useEffect, useState } from 'react';
// import dbConnect from '@/config/db';
// import { userModel } from '@/model/user';

// const fetchDocs = async () => {
//   try {
//     await dbConnect();
//     const users = await userModel.find();
//     console.log("users", users);
//     return users;
//   } catch (error) {
//     console.log("error in contact", error);
//     return [];
//   }
// };

// export default function Page() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const getUsers = async () => {
//       const fetchedUsers = await fetchDocs();
//       setUsers(fetchedUsers);
//     };

//     getUsers();
//   }, []);

//   return (
//     <div>
//       <h1>Contact Page</h1>
//       {users.length > 0 ? (
//         <ul>
//           {users.map((user) => (
//             <li key={user._id}>{user.name}</li>
//           ))}
//         </ul>
//       ) : (
//         <p>No users found</p>
//       )}
//     </div>
//   );
// }


