import { useDispatch, useSelector } from "react-redux"
import CartItem from "./CartItem";
import { clearCart } from "../reducer/cartSlice";
const CartContainer = () => {
    const dispatch = useDispatch();
    const { cartItems, quantity, total, isLoding } = useSelector((store) => store.cart);

    if (quantity < 1) {
        return (
            <>
                <section className="cart">
                    <header>
                        <header>
                            <h2>Your Bag</h2>
                            <h4 className="empty-cart">is currently empty</h4>
                        </header>
                    </header>
                </section>
            </>
        );
    }
    return (
        <>
            <section className="cart">
                <header>
                    <h2>Your Bag</h2>
                </header>
                <div>
                    {
                        cartItems.map((item) => {
                            return <CartItem key={item.id} {...item} />
                        })
                    }
                </div>
                <footer>
                    <hr />
                    <div className='cart-total'>
                        <h4>
                            total <span>${total.toFixed(2)}</span>
                        </h4>
                    </div>
                    <button className='btn clear-btn' onClick={() => {
                        dispatch(clearCart());
                    }}>
                        clear cart
                    </button>
                </footer>
            </section>
        </>
    )
}
export default CartContainer