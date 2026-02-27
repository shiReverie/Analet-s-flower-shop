import React from 'react'
import Card from './Card'
import './css/Containers.css'
import { useGetProductsQuery } from '../services/flowerApi.js'

function ProductList() {
    const { data: products, isLoading, isError, error } = useGetProductsQuery();

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: {error?.status || 'Could not load'}</div>;

    return (
        <div className = "listContainer">
            {products?.map((product) => (
                <Card key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductList;