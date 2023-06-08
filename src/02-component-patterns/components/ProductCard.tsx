import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'
import {createContext, ReactElement, useContext} from "react";
import {useProduct} from "../hooks/useProduct";

interface Product {
    id: string;
    title: string;
    img?: string
}

interface Props {
    children?: ReactElement | ReactElement[];
    product: Product;
}

interface ProductContextProps {
    handleCount: (counter: number) => void
    counter: number
    product: Product
}

const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export const ProductImage = ({img = ''}:{img?:string})=>{
    const { product } = useContext( ProductContext )
    let imgToShow:string;

    if (img){
        imgToShow= img
    } else if (product.img){
        imgToShow= product.img
    } else {
        imgToShow = noImage
    }

    return (<img className={styles.productImg} src={imgToShow} alt={"Title img"} />)
}
export const ProductTitle = ({title = ''}:{title?:string})=>{
    const { product} = useContext( ProductContext )
    return (
        <span className={styles.productDescription}>{ title ? title : product.title }</span>
    )
}
export const ProductButtons = ()=> {
    const { handleCount, counter} = useContext( ProductContext )
    return (
        <div className={styles.buttonsContainer}>
            <button className={styles.buttonMinus} onClick={() => {
                handleCount(-1);
            }}>-
            </button>
            <div className={styles.countLabel}> {counter} </div>
            <button className={styles.buttonAdd} onClick={() => handleCount(1)}>+</button>
        </div>
    )
}

export const ProductCard = ({product, children}: Props) => {
    const {counter, handleCount} = useProduct()
    return (
        <Provider value={{
            counter,
            handleCount,
            product
        }}>
            <div className={ styles.productCard}>
                { children }
            </div>
        </Provider>

    );
};

ProductCard.Image = ProductImage
ProductCard.Title = ProductTitle
ProductCard.Buttons = ProductButtons