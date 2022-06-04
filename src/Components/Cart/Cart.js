import React from 'react'
import styles from './Cart.module.css'
import Modal from '../UI/Modal'
const Crat = () => {
    const cartItems = <ul className={styles['cart-items']}>
        {

            [{ id: 'c1', name: 'Suchi', amount: 2, price: 12.99 },].map((item) => {
                return (

                    <li>{item.name}</li>
                )
            }
            )

        }
    </ul>

    return (
        <Modal>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span> 79.99</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']}>Close</button>
                <button className={styles.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Crat