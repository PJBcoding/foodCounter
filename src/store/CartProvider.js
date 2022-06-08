import { useReducer } from "react";
import CartContext from "./CartContext";

const defualtCartState = {
    items: [],
    totalAmount: 0
};
const cartReducer = (state, action) => {
    if (action.type === "ADD") {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.itemcount;

        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;
        if (existingCartItem) {
            const updatedItem = { ...existingCartItem, itemcount: existingCartItem.itemcount + action.item.itemcount };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        else {
            updatedItems = state.items.concat(action.item)
        }


        return ({
            items: updatedItems,
            totalAmount: updatedTotalAmount,

        });
    }
    else if (action.type === "REMOVE") {


        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);
        const existingCartItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingCartItem.price * 1;


        let updatedItems;
        if (existingCartItem.itemcount === 1) {
            updatedItems = state.items.filter((item) => { return (item.id !== action.id) })
        }
        else { //existingCartItem.itemcount >1 conditon 
            const updatedItem = { ...existingCartItem, itemcount: existingCartItem.itemcount - 1 };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return ({
            items: updatedItems,
            totalAmount: updatedTotalAmount,

        });
    }
    else

        return defualtCartState;

};


const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defualtCartState);

    const addItemToCartHandler = (item) => {

        dispatchCartAction({ type: "ADD", item: item, })
    }
    const deleteItemFromCartHandler = (id) => {
        dispatchCartAction({ type: "REMOVE", id: id })
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        deleteItem: deleteItemFromCartHandler,

    }


    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;