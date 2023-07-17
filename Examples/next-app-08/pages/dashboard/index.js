const { useState, useEffect } = require("react")
const Dashboard=()=>{
    const [isLoading,setLoading]=useState(true);
    const [data,setData]=useState(null);
    useEffect(()=>{
        async function fetcher(){
            const res=await fetch(`http://localhost:3500/dashboard`);
            const result=await res.json();
            setData(result);
            setLoading(false);
        }
        fetcher();
    },[])
    if(isLoading){
        return <h2>...Loading</h2>
    }
    return <div>
        <h1>Dashboard</h1>
        <p>Name:{data.name}</p>
        <p>Posts:{data.posts}</p>
        <p>Comments:{data.comments}</p>
    </div>
}
export default Dashboard;