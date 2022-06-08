import React, { Fragment, useState } from 'react';
import styles from './Header.module.css';
import food from '../../assets/food.jpg';
import CartButtonHeader from './CartButtonHeader'
import Cart from '../../Components/Cart/Cart'
const Header = (props) => {

    const [modalVisible, setmodalVisible] = useState("initial");
    const [btnclsanim, setbtnclsanim] = useState(false);


    const showmodal = () => {
        setmodalVisible("true");
        setbtnclsanim(false)
    }

    const hideCartHandler = () => {
        setmodalVisible("false");
        setbtnclsanim(true)

    }
    return (
        <Fragment>

            {modalVisible === "initial" && <></>}
            {modalVisible === "true" && < Cart onClose={hideCartHandler} anim={btnclsanim} />}
            {modalVisible === "false" && < Cart onClose={hideCartHandler} anim={btnclsanim} />}

            <header className={` ${styles['header-outer']}`}>
                <div className={`${styles.header}`}>

                    <h1> foodCounter</h1>
                    <CartButtonHeader btnpropsOnClick={{ onClick: showmodal }} />
                    {/*  <CartButtonHeader btnpropsOnClick={{ onClick: props.onShowCart }} /> */}
                </div>

            </header>

            <div className={styles['main-image']}>
                <img src={food} alt="main food" />
            </div>
        </Fragment>
    )
}

export default Header