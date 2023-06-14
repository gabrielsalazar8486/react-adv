import {JSX, ReactElement} from "react";
import {ProductCardProps} from "../components/ProductCard";

export interface Product {
    id: string;
    title: string;
    img?: string
}

export interface ProductContextProps {
    handleCount: (counter: number) => void
    counter: number
    product: Product
}

export interface ProductTitleProps {title?:string, className?:string}
export interface ProductImageProps {img?:string, className?:string}
export interface ProductButtonsProps {className?:string}

export interface ProductCardHOCProps {
    ({children, product, className}: ProductCardProps): JSX.Element
    Buttons:(props:ProductButtonsProps) => JSX.Element;
    Title:  (props: ProductTitleProps)  => JSX.Element;
    Image:  (props: ProductImageProps)  => JSX.Element;
}