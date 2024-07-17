import { noSSR } from "next/dynamic";

 
 const fetchPosts=async()=>{
const res=await fetch('http://localhost:3000/api/posts',{cache:'no-store'});
const response=await res.json();
return response
 }


export default async function page() {
    const posts=await fetchPosts();
    console.log("posts",posts);
  return (
      <div>
        <div>fetch posts</div>
        {posts.map((post)=>{
          return ( <>
          <h1>{post.id}</h1>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <hr />
</>
)
        })}
    </div>
  )
}
