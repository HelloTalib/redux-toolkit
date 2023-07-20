import { useDispatch } from "react-redux"
import { ChevronDown, ChevronUp } from "../icons"
import { removeItem, increase, decrement } from "../reducer/cartSlice";
const CartItem = ({ id, title, price, img, quantity }) => {
    const dispatch = useDispatch();
  return (
      <article className='cart-item' data-index={id}>
          <img src={img} alt={title} />
          <div>
              <h4>{title}</h4>
              <h4 className='item-price'>${price}</h4>
              <button className='remove-btn' onClick={() => dispatch(removeItem(id))}>
                  remove
              </button>
          </div>
          <div>
              <button className='amount-btn' onClick={() => dispatch(increase({ id }))}>
                  <ChevronUp />
              </button>
              <p className='amount'>{quantity}</p>
              <button className='amount-btn' onClick={() => {
                // if (quantity === 1) {
                //     return dispatch(removeItem(id));
                // }
                  dispatch(decrement({ id }))
            }}>
                  <ChevronDown />
              </button>
          </div>
      </article>
  )
}
export default CartItem