import {ProductCard as ProductCardHOC} from "./ProductCard";
import {ProductButtons} from "./ProductButtons";
import {ProductTitle} from "./ProductTitle";
import {ProductImage} from "./ProducImage";

export {ProductButtons} from "./ProductButtons";
export {ProductTitle} from "./ProductTitle";
export {ProductImage} from "./ProducImage";

export const ProductCard = Object.assign(ProductCardHOC, {
    Buttons: ProductButtons,
    Title: ProductTitle,
    Image: ProductImage,
})