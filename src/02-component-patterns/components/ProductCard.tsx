import styles from '../styles/styles.module.css'
import {createContext, ReactElement} from "react";
import {useProduct} from "../hooks/useProduct";
import {Product, ProductContextProps} from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export interface ProductCardProps {
    children?: ReactElement | ReactElement[];
    product: Product;
    className?: string;
}

export const ProductCard = ({product, children, className}: ProductCardProps) => {
    const {counter, handleCount} = useProduct()
    const valuesContext = {
        counter,
        handleCount,
        product
    }
    return (
        <Provider value={valuesContext}>
            <div className={ `${styles.productCard} ${className}`}>
                { children }
            </div>
        </Provider>

    );
};