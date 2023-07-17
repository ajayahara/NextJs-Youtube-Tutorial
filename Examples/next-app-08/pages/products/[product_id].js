import { useRouter } from "next/router";
const ProductDetails = ({ products }) => {
    const router=useRouter();
    if(router.isFallback){
        return <h2>...Loading</h2>
    }
    return <div>
        <h1>Product Details</h1>
        <p>{products.id}-{products.name}-{products.price}</p>
    </div>
}
export default ProductDetails;
const getStaticPaths = () => {
    return {
        paths: [
            {
                params: {product_id: "1" }
            }
        ],
        fallback: true
    }
}
export {getStaticPaths}
const getStaticProps = async (context) => {
    const { params } = context;
    const res = await fetch(`http://localhost:3500/products/${params.product_id}`);
    const data = await res.json();
    if(!data.id){
        return {
            notFound:true
        }
    }
    return {
        props: {
            products: data
        },
        revalidate:5
    }
}
export { getStaticProps }