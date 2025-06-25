import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import ProductsPagination from '../components/ProductsPagination'
import SearchIcon from '/assets/search-icon.svg'
import FilterSidebar from '../components/homePage/shopPage/FilterSidebar'
import Status from '../lib/status'
import TuneIcon from '@mui/icons-material/Tune';
import PageHeaderBreadcrumb from '../components/PageHeaderBreadcrumb'

function ShopPage() {
  const { products, categories, brands, ratings, status, error } = useSelector((state) => state.product)

  const location = useLocation()
  const navigate = useNavigate()
  const { category } = useParams()
  const isRootShopPage = location.pathname === '/shop'

  //filter sidebar mobile
  const [openFilterMobile, setOpenFilterMobile] = useState(false)

  const [productListPagination, setProductListPagination] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  //Search functionality
  const handleSearch = () => {
  const trimmed = searchTerm.trim().toLowerCase()
  if (!trimmed) return

  const filtered = products.filter((product) =>
    product.title.toLowerCase().includes(trimmed)
  )

  setProductListPagination(filtered)
}


  // Filters
  const [priceRange, setPriceRange] = useState([0, 5000])
  const [selectedBrands, setSelectedBrands] = useState([])
  const [selectedRatings, setSelectedRatings] = useState([])

  const handleCategory = (selectedCategory) => {
    const lowerCased = selectedCategory.toLowerCase()
    navigate(`/shop/${lowerCased}`)
  }

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue)
  }

  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    )
  }

  const handleRatingChange = (range) => {
    const exists = selectedRatings.some((r) => r.min === range.min && r.max === range.max)
    if (exists) {
      setSelectedRatings((prev) => prev.filter((r) => !(r.min === range.min && r.max === range.max)))
    } else {
      setSelectedRatings((prev) => [...prev, range])
    }
  }

  // Filtering
  useEffect(() => {
    let filtered = [...products]

    if (category && category !== 'all') {
      filtered = filtered.filter((product) => product.category === category.toLowerCase())
    }

    filtered = filtered.filter((product) => {
      const matchPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
      const matchBrand =
        selectedBrands.length === 0 || selectedBrands.includes(product.brand)
      const matchRating =
        selectedRatings.length === 0 ||
        selectedRatings.some(
          ({ min, max }) => product.rating >= min && product.rating <= max
        )
      const matchSearch = 
        searchTerm.trim() === '' ||
        product.title.toLowerCase().includes(searchTerm.trim().toLowerCase())

       return matchPrice && matchBrand && matchRating && matchSearch
    })

    setProductListPagination(filtered)
  }, [category, products, priceRange, selectedBrands, selectedRatings, searchTerm])

  if (!isRootShopPage && !category) {
    return <Outlet />
  }

  if (status === Status.Loading) {
    return <p className="text-center my-10">Loading...</p>
  }

  if (status === Status.Failed) {
    return <p className="text-center my-10 text-red-500">Error: {error}</p>
  }

  return (
    <div className='flex flex-col items-center pb-5'>
      <PageHeaderBreadcrumb pageName={"Shop"}/>

      <div className='bg-[#F9F1E7] w-full py-7 px-10 flex justify-center items-center'>
        <div className='flex lg:flex-row flex-col-reverse lg:gap-0 gap-8 justify-between items-center w-full max-w-[112rem]'>
          <div className='flex items-center justify-center gap-10'>
             <button className='flex items-center justify-center gap-2 lg:hidden' onClick={() => setOpenFilterMobile(true)}>
              <TuneIcon style={{fontSize:"2rem"}}/> <span className='text-lg'>Filter</span>
            </button>
            <p className='text-black text-lg font-base'>
              Showing {productListPagination.length} of {products.length} results
            </p>
          </div>

          <div className='flex items-center md:flex-nowrap flex-wrap justify-center md:gap-15 gap-x-5 gap-y-2'>
            <h2
              className={`capitalize text-lg cursor-pointer ${!category || category === 'all' ? 'underline font-semibold text-black' : 'hover:underline text-gray-700'}`}
              onClick={() => navigate('/shop/all')}
            >
              All
            </h2>
            {categories.map((cat, index) => {
              const isActive = category === cat.toLowerCase()

              return (
                <h2
                  key={index}
                  className={`capitalize text-lg cursor-pointer ${isActive ? 'underline font-semibold text-black' : 'hover:underline text-gray-700'}`}
                  onClick={() => handleCategory(cat)}
                >
                  {cat}
                </h2>
              )
            })}
          </div>

          <div className='flex items-center justify-center gap-1 sm:w-auto w-full'>
            <input type="text" placeholder='Search' className='outline-none border-b sm:w-auto w-full' value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSearch()
                }
              }}
            />
            <img src={SearchIcon} className='w-[1.5rem] cursor-pointer' alt="search" onClick={handleSearch} />
          </div>
        </div>
      </div>

      <div className='flex w-full justify-between'>
        <FilterSidebar
          priceRange={priceRange}
          onPriceChange={handlePriceChange}
          selectedBrands={selectedBrands}
          onBrandChange={handleBrandChange}
          selectedRatings={selectedRatings}
          onRatingChange={handleRatingChange}
          brands={brands}
          ratings={ratings}
          openFilterMobile={openFilterMobile}
          setOpenFilterMobile={setOpenFilterMobile}
        />
        <ProductsPagination
          productPerPage={16}
          productList={productListPagination}
        />
      </div>
    </div>
  )
}

export default ShopPage
