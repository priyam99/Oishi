import cart from '../img/cart.jpg'
import { useSelector, useDispatch } from 'react-redux';
import ItemList from './ItemList';
import { clearCart } from '../Utils/cartSlice';
import { Link } from 'react-router-dom';
const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }
    
    return (
        <div>
            <div className='text-center m-4 p-4'>
            {cartItems.length === 0 ? (
                    <div className="empty-cart">
                        <img src={cart} alt="Empty Cart" className="mx-auto h-[500px]" />
                        <p className='font-bold'>No items in your cart</p>
                       <Link to={"/search"}> <button className="bg-orange-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-orange-600">
                        SEE RESTAURANTS NEAR YOU
                        </button>
                        </Link>
                    </div>
                ) :
                (<div className=' w-6/12 m-auto'>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded-md mb-4 hover:bg-orange-600" onClick={handleClearCart}>
                            Clear Cart
                        </button>
                    <ItemList items={cartItems} />
                </div>)}
            </div>

        </div>
    )
}

export default Cart;
