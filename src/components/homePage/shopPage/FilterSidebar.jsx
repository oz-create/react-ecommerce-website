import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


function FilterSidebar({
  priceRange, onPriceChange,
  selectedBrands, onBrandChange,
  selectedRatings, onRatingChange,
  brands, ratings, openFilterMobile, setOpenFilterMobile

}) {
  const ranges = [
    [0, 1],
    [2, 3],
    [3, 4],
    [4, 5]
  ];
  console.log(openFilterMobile);
  const menuRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenFilterMobile(false);
      }
    }

    if (openFilterMobile) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openFilterMobile]);

  const grouped = ranges.map(([min, max]) => ({
    label: `${min.toFixed(2)} - ${max.toFixed(2)}`,
    min, max
  }));

  function valuetext(value) {
    return `${value} $`;
  }

  return (
    <div
      ref={menuRef}
      className={`max-w-[23rem] w-full lg:relative fixed left-[-23rem] lg:left-auto z-100 lg:top-auto top-[10rem] transition-all lg:mt-10 border-r px-5 flex flex-col items-start justify-start bg-white lg:h-auto h-screen lg:overflow-hidden overflow-y-auto overflow-x-hidden pb-[11rem]
        ${openFilterMobile ? 'left-[0rem]' : '-left-[23rem]'}`}
    >
      {/* Price Filter */}
      <div className='mt-10 w-full'>
        <h1 className='mb-3'>Select Price</h1>
        <Box sx={{ width: "100%" }}>
          <Slider
            getAriaLabel={() => 'Price range'}
            value={priceRange}
            onChange={onPriceChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            min={0}
            max={5000}
          />
        </Box>
      </div>

      {/* Brand Filter */}
      <div className='mt-10'>
        <h1 className='mb-3'>Select Brand</h1>
        <FormGroup>
          {brands.map((brand, index) => (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  checked={selectedBrands.includes(brand)}
                  onChange={() => onBrandChange(brand)}
                />
              }
              label={brand}
            />
          ))}
        </FormGroup>
      </div>

      {/* Rating Filter */}
      <div className='mt-10'>
        <h1 className='mb-3'>Select Rating</h1>
        <FormGroup>
          {grouped.map((group, index) => (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  checked={selectedRatings.some(r => r.min === group.min && r.max === group.max)}
                  onChange={() => onRatingChange(group)}
                />
              }
              label={group.label}
            />
          ))}
        </FormGroup>
      </div>
    </div>
  )
}

export default FilterSidebar;

