import React, { useRef, useState } from 'react';
import styles from './MealItemForm.module.css';
import Input from '../../UI/Input';

const MealItemForm = (props) => {

    const [enteredAmountIsValid, setenteredAmountIsValid] = useState(true);//On submit
    const inputRef = useRef();

    const [itemCount, setitemcount] = useState();      // onchange 
    const [entrAmountValid, setentrAmountValid] = useState(true);

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredItemCount_str = (inputRef.current.value);
        const enteredItemCount_number = +enteredItemCount_str;

        if (enteredItemCount_str.trim().length === 0 || enteredItemCount_number < 1 || enteredItemCount_number > 5) {
            setenteredAmountIsValid(false);
            return
        }
        else if (enteredItemCount_str.trim().length !== 0 || enteredItemCount_number > 1 || enteredItemCount_number < 5) {
            setenteredAmountIsValid(true);
        }
        props.onAddToCart(enteredItemCount_number);
    }

    const onChangeHandler = (event) => {

        const str_itemCount = event.target.value;
        const num_itemCount = +str_itemCount;
        setitemcount(num_itemCount);

        if (str_itemCount.trim().length === 0 || num_itemCount < 1 || num_itemCount > 5) {

            setentrAmountValid(false)
            return
        }
        else if (str_itemCount.trim().length !== 0 || num_itemCount > 1 || num_itemCount < 5) {

            setentrAmountValid(true);
        }


    }
    return (
        <form className={styles.form} onSubmit={submitHandler}>

            <Input label="Amount" ref={inputRef} input={{ id: 'amount_' + props.id, type: 'number', step: '1', defaultValue: '1' }} val={itemCount} onChangeEffect={onChangeHandler} />
            <button>+Add</button>
            {!enteredAmountIsValid && <p > Invlid Amount Entered . Enter a value from 1 to 5</p>}
            {enteredAmountIsValid && <></>}
            {!entrAmountValid && <p > Invlid Amount Entered . Enter a value from 1 to 5</p>}
            {entrAmountValid && <></>}
        </form >
    )
}

export default MealItemForm;