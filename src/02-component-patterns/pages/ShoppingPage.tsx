import {ProductButtons, ProductImage, ProductTitle, ProductCard} from "../components";
import '../styles/custom-styles.css'
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
                <ProductCard product={product}>
                    <ProductImage className={"custom-image"}/>
                    <ProductTitle className={"text-bold"}/>
                    <ProductButtons/>
                </ProductCard>

                <ProductCard className={"bg-dark text-white "} product={product}>
                    <ProductCard.Image className={"custom-image"}/>
                    <ProductCard.Title className={"text-bold"}/>
                    <ProductCard.Buttons className={"custom-buttons"}/>
                </ProductCard>

                <ProductCard style={{backgroundColor: "#70D1F8"}} product={product}>
                    <ProductCard.Image className={"custom-image"} style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'}}/>
                    <ProductCard.Title className={"text-bold"} style={{fontWeight: 'bold'}}/>
                    <ProductCard.Buttons style={{ display: 'flex', justifyContent: 'end'}}/>
                </ProductCard>
            </div>
        </div>
    );
};

export default ShoppingPage