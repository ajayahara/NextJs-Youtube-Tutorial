import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

//pre-rendering with client side data fetching
const PreWithClient = ({ articles }) => {
    const router=useRouter();
    const [data, setData] = useState(articles);
    const handleClick = async () => {
        const res = await fetch(" http://localhost:3500/news?category=sports");
        const result = await res.json();
        setData(result)
        router.push('/prepluscsdf?category=sports',undefined,{shallow:false})
    }
    return <div>
        <button onClick={handleClick}>Find Sports</button>
        <h1>News List Page</h1>
        {data.map((el) => {
            return <div>
                <Link href={`/news/${el.id}`}>{el.id}-{el.title}-{el.category}</Link>
            </div>

        })}
    </div>
}
export default PreWithClient;
const getServerSideProps = async (context) => {
    const {query}=context;
    const  {category}=query;
    const string=category?"?category=sports":"";
    const res = await fetch(`http://localhost:3500/news${string}`);
    const data = await res.json();
    return {
        props: {
            articles: data
        }
    }
}
export { getServerSideProps }