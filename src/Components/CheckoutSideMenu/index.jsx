import { XMarkIcon } from '@heroicons/react/24/solid'
import React, { useContext } from 'react'
import './styles.css'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../MiniOrderCards'
import { totalPrice } from '../../Utils'

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)
    // console.log(context.cartProducts)
    // console.log(context.showProduct)

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
    }

    return (
        <aside className={`${context.isCheckoutSideMenuOpen ? 'flex': 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}
        >
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div onClick={() => context.closeCheckoutSideMenu()}
                >
                <XMarkIcon className='h-6 w-6 text-black cursor-pointer'></XMarkIcon>
                </div>
            </div>
            <div className='px-6 overflow-y-scroll'>
            {
                context.cartProducts.map(product => (
                    <OrderCard
                    key={product.id} 
                    id={product.id}
                    title={product.title}
                    imageUrl={product.image}
                    price={product.price}
                    handleDelete={handleDelete}
                    />
                ))
            }
            </div>
            <div className='px-6'>
            <p className='flex justify-between items-center'>
                <span className='font-light'>Total:</span>
                <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
            </p>
            </div>
            
        </aside>
    )
}

export default CheckoutSideMenu