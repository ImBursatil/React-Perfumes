import cart from './assets/carrito.png'

const CartWidget = () => {
    return (
        <div>
            <img src={cart} alt='cart' />
            Carrito
        </div>
    )
}

export default CartWidget