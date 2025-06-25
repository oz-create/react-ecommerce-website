import React, { useState } from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useSelector } from 'react-redux';
import Status from '../lib/status';
import ProductCard from './homePage/ProductCard';
import CircularProgress from '@mui/material/CircularProgress';


function ProductsPagination({productPerPage,productList}) {
    
    const { status, error } = useSelector((state) => state.product)
    const [page, setPage] = useState(1)

    if (status === Status.Loading) {
        return <CircularProgress />
    }

    if (status === Status.Failed) {
        return <p className="text-center my-10 text-red-500">Error: {error}</p>
    }

   

    const startIndex = (page - 1) * productPerPage
    const endIndex = startIndex + productPerPage
    const paginatedProducts = productList.slice(startIndex, endIndex)

    const handleChange = (event, value) => {
        setPage(value)
    }

    return (
        <div className='flex flex-col items-center custom-container'>
            <div className='flex justify-center items-center flex-wrap mt-10 gap-4 w-full px-5'>
                {paginatedProducts.map((product, index) => (
                      <ProductCard product={product} key={index} />
                ))}
            </div>

            {Math.ceil(productList.length / productPerPage) > 1 && (
                <Stack spacing={2} className="mt-8">
                    <Pagination
                        count={Math.ceil(productList.length / productPerPage)}
                        page={page}
                        onChange={handleChange}
                        color="primary"

                    />
                </Stack>
            )}
        </div>
    )
}

export default ProductsPagination