import {useContext} from "react";
import styles from "../styles/styles.module.css";
import {ProductContext} from "./ProductCard";
import {ProductButtonsProps} from "../interfaces/interfaces";

export const ProductButtons = ({className, style}:ProductButtonsProps)=> {
    const { handleCount, counter} = useContext( ProductContext )
    return (
        <div
            className={`${styles.buttonsContainer} ${className}`}
            style={style}
        >
            <button className={styles.buttonMinus} onClick={() => {
                handleCount(-1);
            }}>-
            </button>
            <div className={styles.countLabel}> {counter} </div>
            <button className={styles.buttonAdd} onClick={() => handleCount(1)}>+</button>
        </div>
    )
}