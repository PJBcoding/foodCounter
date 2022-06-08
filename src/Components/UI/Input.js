import React from 'react'
import styles from './Input.module.css'
const Input = React.forwardRef((props, ref) => {
    return (
        <div className={styles.input}>
            <label htmlFor={props.input.id}> {props.label}</label>
            <input ref={ref} {...props.input} value={props.val} onChange={props.onChangeEffect} />
        </div>
    )
});

export default Input;