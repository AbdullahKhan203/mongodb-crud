import { NextResponse } from "next/server"

var posts=[
    {
        id:1,
        title:"NEXTJS 13 course",
        description:"A detail description",
        image:"nextjs.png",
    },
    {
        id:2,
        title:"Typescript course",
        description:"A detail description",
        image:"typescript.png",
    },
]


export const GET=()=>{
    return NextResponse.json(posts)
}

export const POST=async(req)=>{
     const body=await req.json();
     posts.push(body)
     return NextResponse.json({message:"Post successfully created"});

}
export const DELETE=async(req)=>{
    const id=new URL(req.url).searchParams.get("id");
    posts=posts.filter((post)=>post.id != id)
    console.log("id",id);
     return NextResponse.json({message:"post successfully deleted"});

}
export const PUT=async(req)=>{
     const body=await req.json();
     posts=posts.map((post)=>{
      
        if (post.id == body.id) {
            return body
        } else {
            return post 
        }
        
        
     })
     return NextResponse.json({message:"post successfully deleted"});

}