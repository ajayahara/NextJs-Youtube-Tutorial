const { useState, useEffect } = require("react");
import useSWR from "swr"
const fetcher=async ()=>{
    try{
        const res=await fetch(`http://localhost:3500/dashboard`);
    const result=await res.json();
    return result
    }catch(err){
        throw new Error("Fetching data Error")
    }
}
const DashboardSwr=()=>{
    const { data, error } = useSWR("dashboard", fetcher);
    if(error){
        return "An error ocurred";
    }
    if(!data){
        return <h2>...Loading</h2>
    }
    return <div>
        <h1>Dashboard</h1>
        <p>Name:{data.name}</p>
        <p>Posts:{data.posts}</p>
        <p>Comments:{data.comments}</p>
        <p>Likes:{data.likes}</p>
    </div>
}
export default DashboardSwr;