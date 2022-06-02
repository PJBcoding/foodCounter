import React, { Fragment } from 'react';
import styles from './Header.module.css';
import food from '../../assets/food.jpg';
const Header = () => {
    return (
        <Fragment>

            <header className={` ${styles['header-outer']}`}>
                <div className={`${styles.header}`}>

                    <h1> foodCounter</h1>
                    <button className={styles.btn}>Cart</button>
                </div>

            </header>

            <div className={styles['main-image']}>
                <img src={food} alt="main food" />
            </div>
        </Fragment>
    )
}

export default Header