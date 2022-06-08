import React, { useContext } from 'react';
import styles from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/CartContext';

const MealItem = (props) => {
    const cart_Ctx = useContext(CartContext);
    const formated_price = `₹ ${props.price.toFixed(2)} `

    const onAddToCartHandler = (itemCount_to_be_received_from_MealItemForm_component) => {

        console.log('The item count is  :' + itemCount_to_be_received_from_MealItemForm_component);

        cart_Ctx.addItem({
            id: props.id,
            name: props.name,
            itemcount: itemCount_to_be_received_from_MealItemForm_component,
            price: props.price,
        })

    }
    return (
        <li className={styles.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={styles.description}>{props.description}</div>
                <div className={styles.price}>{formated_price}</div>
            </div>
            <div>
                <MealItemForm id={props.id} onAddToCart={onAddToCartHandler} />
            </div>
        </li>
    )
}

export default MealItem;