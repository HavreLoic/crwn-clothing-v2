import Button from "../button/button.component";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../context/card.context";
import { CartDropdownContainer, CartItems, EmptyMessage } from "./card-dropdown.styles";

const CardDropdown = () => {
    const { cartItems } = useContext(CartContext)
    const goTocheckOutHandler = () => {
        navigate("/checkout")
    }
    const navigate = useNavigate()
    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length ? (
                    cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
                ) : (
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                )}
            </CartItems>
            <Button onClick={goTocheckOutHandler}>CHECKOUT</Button>
        </CartDropdownContainer>
    );
};

export default CardDropdown;