import { useState } from "react";

export default function CommentPage(){
    const [comments,setComments]=useState([])
    const [comment,setComment]=useState("");
    const loadComments=async ()=>{
      const res =await fetch("/api/comments");
      const data=await res.json();
      setComments(data);
    }
    const handleSubmit=async()=>{
        await fetch("/api/comments",{
            method:"POST",
            body:JSON.stringify({comment}),
            headers:{
                "Content-type":"application/json"
            }
        })
        loadComments();
        setComment('')
    }
    const handleDelete=async (comment_id)=>{
        console.log(comment_id)
     await fetch(`/api/comments/${comment_id}`,{
            method:"DELETE",
            headers:{
                "Content-type":"application/json"
            }
        })
        loadComments()
        
    }
    return <>
    <button onClick={loadComments}>Load Comments</button>
    <div>{comments.map((el)=>{
        return <div key={el.id}>
            <p>{el.id}-{el.text}</p>
            <button onClick={()=>handleDelete(el.id)}>delete</button>
        </div>
    })}</div>
    <div>
        <input type="text" value={comment} onChange={(e)=>setComment(e.target.value)}></input>
        <button onClick={handleSubmit}>submit</button>
    </div>
    </>
}