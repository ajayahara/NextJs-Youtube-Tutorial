import Link from "next/link";

const NewsLists=({articles})=>{
    return <div>
        <h1>News List Page</h1>
    {articles.map((el)=>{
        return <div>
            <Link href={`/news/${el.id}`}>{el.id}-{el.title}-{el.category}</Link>
        </div>

    })}
    </div>
}
export default NewsLists;
const getServerSideProps=async ()=>{
const res=await fetch(" http://localhost:3500/news");
const data=await res.json();
return {
    props:{
        articles:data
    }
}
}
export {getServerSideProps}