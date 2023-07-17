const NewsDetails=({articles})=>{
    return <div>
        <h2>News Details Page</h2>
        {
            articles.map((el)=>{
                return <p>{el.id}-{el.title}-{el.category}-{el.description}</p>
            })
        }
    </div>
}
export default NewsDetails
// export function getServerSidePaths(){
//     return {
//         paths:[
//             {params:{category:"sports"}},
//             {params:{category:"politics"}}
//         ]
//     }
// }
 export async function getServerSideProps(context){
    const {params,req,res,query}=context;
    const response=await fetch(`http://localhost:3500/news?category=${params.category}`);
    const data=await response.json();
    return {
        props:{
            articles:data
        }
    }
 }