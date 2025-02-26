import React from 'react';
import ProductDetails from '@/app/pages/Products/productDetails';

export const metadata = {
    title: "Product Details",
};


export default function page() {

    return (
        <div className='min-h-screen'>
           <ProductDetails />
        </div>
    )
}
