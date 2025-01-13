

import axios from "axios"



export default async function Blogs({params}:{params:Promise<{ postId:String}>}){
  
  const Id = (await params).postId
  
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${Id}`) 
   const data =  response.data
    

  
  return (<>
  You are seeing the data of BlogPost id :{Id}
  <br/>

This is the title : {data.title}<br/>
This is the body : {data.body}
  </>)
}