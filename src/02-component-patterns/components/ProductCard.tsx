import styles from '../styles/styles.module.css'
import {createContext, ReactElement} from "react";
import {useProduct} from "../hooks/useProduct";
import {ProductCardProps, ProductContextProps} from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export const ProductCard = ({product, children, className, style}: ProductCardProps) => {
    const {counter, handleCount} = useProduct()
    const valuesContext = {
        counter,
        handleCount,
        product
    }
    return (
        <Provider value={valuesContext}>
            <div
                className={ `${styles.productCard} ${className}`}
                style={style}
            >
                { children }
            </div>
        </Provider>

    );
};