import React, { useState, useEffect } from 'react';
import {getProducts} from '../services'
import Loading from './Loading'



const ListProducts = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [products, setProducts] = useState([])

    useEffect(() => {
        const loadProducts = async () => {
            const response = await getProducts()

            if (response.status === 200) {
                setProducts(response.data.products)
            }
            setIsLoading(false)
        }
        loadProducts()
    }, [])

    return ( 
        <div>
            {
            isLoading
            ? <Loading></Loading>
            : 'mostrar resultado fetch'
         }
        </div>
        
     );
}
 
export default ListProducts;