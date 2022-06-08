import React, { useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import styles from './CartButtonHeader.module.css';
import { useContext } from 'react';
import cartContext from '../../store/CartContext';

const CartButtonHeader = (props) => {

    const crtCtx = useContext(cartContext);
    const numberOfCartItems = crtCtx.items.reduce((currVal, item) => { return (currVal + item.itemcount) }, 0);

    const [itemAddedToCartAnimation, setitemAddedToCartAnimation] = useState(false);

    useEffect(() => {
        if (crtCtx.items.length === 0) { return; }
        else {

            setitemAddedToCartAnimation(true)
        }
        const timer = setTimeout(() => {
            setitemAddedToCartAnimation(false);
        }, 300);
        return (() => {
            clearTimeout(timer);
        })
    }, [crtCtx.items])


    const cartBtnClass = `${styles.btn} ${itemAddedToCartAnimation ? styles.bump : ''}`;


    return (<button className={cartBtnClass} {...props.btnpropsOnClick}>

        <span> <CartIcon /> </span>
        <span>Cart Items</span>
        <span className={`${styles.badge}`}>{numberOfCartItems}</span>
    </button >
    )
}

export default CartButtonHeader