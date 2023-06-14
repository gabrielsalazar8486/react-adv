import {ProductCard as ProductCardHOC, ProductCardProps} from "./ProductCard";
import {ProductButtons} from "./ProductButtons";
import {ProductTitle} from "./ProductTitle";
import {ProductImage} from "./ProducImage";
import {ProductCardHOCProps} from "../interfaces/interfaces";

export {ProductButtons} from "./ProductButtons";
export {ProductTitle} from "./ProductTitle";
export {ProductImage} from "./ProducImage";

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
    Buttons: ProductButtons,
    Title: ProductTitle,
    Image: ProductImage,
})