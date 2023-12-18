import './cart-dropdown.styles.scss';
import Button, { BUTTON_TYPE_CLASSES} from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { useNavigate } from 'react-router-dom';

const CardDropdown = () => {
    const { cartItems } = useContext(CartContext);
    
    const navigation = useNavigate();

    const goToCheckoutHandler = () => {
        navigation('/checkout');
    };

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>{cartItems.map((item) => <CartItem key={item.id} cartItem={item}/>)}</div>
            <Button onClick={goToCheckoutHandler} buttonType={BUTTON_TYPE_CLASSES.inverted}>GO TO CHECKOUT</Button>
        </div>
    );
};

export default CardDropdown;