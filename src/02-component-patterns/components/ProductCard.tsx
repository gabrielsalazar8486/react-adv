import styles from '../styles/styles.module.css'
import {createContext} from "react";
import {useProduct} from "../hooks/useProduct";
import {ProductContextProps, Props} from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export const ProductCard = ({product, children}: Props) => {
    const {counter, handleCount} = useProduct()
    const valuesContext = {
        counter,
        handleCount,
        product
    }
    return (
        <Provider value={valuesContext}>
            <div className={ styles.productCard}>
                { children }
            </div>
        </Provider>

    );
};