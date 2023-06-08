import { title } from "process";
import {ProductButtons, ProductCard, ProductImage, ProductTitle} from "../components/ProductCard";
import {useProduct} from "../hooks/useProduct";

export const ShoppingPage = () => {
    const products = [
        { id: "1", title: "Coffee Mog", img: './coffee-mug.png'},
    ]
    const product = products[0];
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div
            style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap"
            }}
            >
                <ProductCard key={product.id} product={product}>
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />
                </ProductCard>

                <ProductCard key={product.id} product={product}>
                    <ProductCard.Image />
                    <ProductCard.Title />
                    <ProductCard.Buttons />
                </ProductCard>
                {
                    // products.map( product => {
                    //     const {counter, handleCount} = useProduct()
                    //     return
                    //     (<ProductCard key={product.id} product={product}>
                    //         <ProductImage img={product.img}/>
                    //         <ProductTitle title={product.title}/>
                    //         <ProductButtons counter={counter} handleCount={handleCount}/>
                    //     </ProductCard>)
                    // })
                }


            </div>
        </div>
    );
};

export default ShoppingPage