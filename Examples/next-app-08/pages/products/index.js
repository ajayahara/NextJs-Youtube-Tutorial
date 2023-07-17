import Link from "next/link";
const ProductList=({products})=>{
    return <div>
        <h1>Product List</h1>
        {products.map((el)=>{
            return <Link href={`/products/${el.id}`} key={el.id}>{el.id}-{el.name}-{el.price}</Link>
        })}
    </div>
}
export default ProductList;

 const getStaticProps=async ()=>{
    const res=await fetch("http://localhost:3500/products");
    const data=await res.json();
    return {
        props:{
            products:data
        }
    }
 }
 export {getStaticProps}