import { XMarkIcon } from '@heroicons/react/24/solid'


import React, { useContext } from 'react'
import './styles.css'
import { ShoppingCartContext } from '../../Context'

const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)
    // console.log(context.showProduct)

    return (
        <aside className={`${context.isProductDetailOpen ? 'flex': 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}
        
        >
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div onClick={() => context.closeProductDetail()}
                >
                <XMarkIcon className='h-6 w-6 text-black cursor-pointer'></XMarkIcon>
                </div>
            </div>
            <figure className='px-6'>
                    <img className='w-full h-full rounded-lg' 
                    src={context.showProduct.image} 
                    alt={context.showProduct.title} />
                </figure>
                <p className='flex flex-col p-6'>
                    <span className='font-medium text-2xl mb-2'>${context.showProduct.price}</span>
                    <span className='font-medium text-md'>${context.showProduct.title}</span>
                    <span className='font-light text-sm'>${context.showProduct.description}</span>
                </p>
        </aside>
    )
}

export default ProductDetail