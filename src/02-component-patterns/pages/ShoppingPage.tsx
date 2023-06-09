import {ProductButtons, ProductImage, ProductTitle, ProductCard} from "../components";

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
            </div>
        </div>
    );
};

export default ShoppingPage