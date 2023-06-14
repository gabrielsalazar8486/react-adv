import {useContext} from "react";
import styles from "../styles/styles.module.css";
import {ProductContext} from "./ProductCard";
import {ProductTitleProps} from "../interfaces/interfaces";

export const ProductTitle = ({title = '', className}: ProductTitleProps)=>{
    const { product} = useContext( ProductContext )
    return (
        <span className={`${styles.productDescription} ${className}`}>{ title ? title : product.title }</span>
    )
}