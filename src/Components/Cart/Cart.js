import React, { useContext } from 'react';
import styles from './Cart.module.css';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import CartContext from '../../store/CartContext';

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    console.log('......' + cartCtx.totalAmount);
    const totalAmount = `₹ ${cartCtx.totalAmount.toFixed(2)}`;
    const cartHasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.deleteItem(id);

    }


    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, itemcount: 1 })
    }
    const cartItems = <ul className={styles['cart-items']}>
        {
            cartCtx.items.map((item) => {
                return (

                    <CartItem key={item.id} name={item.name} itemCount={item.itemcount} price={item.price} onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={cartItemAddHandler.bind(null, item)} />
                )
            }
            )

        }
    </ul>





    return (
        <Modal onClose={props.onClose} anim={props.anim}>

            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={props.onClose}>Close</button>
                {cartHasItems && <button className={styles.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart;