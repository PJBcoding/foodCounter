import React from 'react';
import CartIcon from '../Cart/CartIcon';
import styles from './CartButtonHeader.module.css';


const CartButtonHeader = () => {
    return (<button className={styles.btn}>

        <span> <CartIcon /> </span>
        <span>Cart Items</span>
        <span className={`${styles.badge}  ${styles.bump}`}>3</span>
    </button>
    )
}

export default CartButtonHeader