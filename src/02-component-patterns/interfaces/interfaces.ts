import {CSSProperties, JSX, ReactElement} from "react";

export interface ProductCardProps {
    children?: ReactElement | ReactElement[];
    product: Product;
    className?: string;
    style?: CSSProperties
}

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

export interface ProductTitleProps {
    title?:string,
    className?:string,
    style?: CSSProperties
}

export interface ProductImageProps {
    img?:string,
    className?:string,
    style?: CSSProperties
}

export interface ProductButtonsProps {
    className?:string,
    style?: CSSProperties
}

export interface ProductCardHOCProps {
    ({children, product, className}: ProductCardProps): JSX.Element
    Buttons:(props:ProductButtonsProps) => JSX.Element;
    Title:  (props: ProductTitleProps)  => JSX.Element;
    Image:  (props: ProductImageProps)  => JSX.Element;
}