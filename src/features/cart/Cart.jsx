import { Link } from 'react-router-dom';
import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import {useDispatch, useSelector} from 'react-redux'
import CartItem from './CartItem';
import EmptyCart from './EmptyCart'
import { clearCart, getCart } from './carSlice';


function Cart() {
  const username = useSelector((state) => state.user.username);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  if (!cart.length) return <EmptyCart/>

  return (
    <div className='py-3 px-4'>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className='mt-7 text-xl font-semibold'>Your cart, {username}</h2>

      <ul className='mt-3 divide-y divide-stone-200 border-b'>
        {cart.map(item => <CartItem item={item} key={item.key} />)}
      </ul>
      <div className='mt-6 space-x-3'>
        <Button type="small" to="/order/new">Order pizzas</Button>
        <Button type="secondary" onClick={()=> dispatch(clearCart())}>Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
