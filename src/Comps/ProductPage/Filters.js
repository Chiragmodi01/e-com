import React from 'react';
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from 'react-icons/md';

export function FilterCategory() {
  return (
    <div className="filters_eachFilter filter-category">
      <input type="checkbox" id="filter-category category-1" />
      <label htmlFor="category-1">Jerey (19)</label>
      <input type="checkbox" id="filter-category category-2" />
      <label htmlFor="category-2">Polos (10)</label>
      <input type="checkbox" id="filter-category category-3" />
      <label htmlFor="category-3">Shirts (6)</label>
    </div>
  )
}

export function FilterMaterial() {
  return (
    <div className="filters_eachFilter filter-material">
      <input type="checkbox" id="filter-material material-1" />
      <label htmlFor="material-1">Leather (19)</label>
      <input type="checkbox" id="filter-material material-2" />
      <label htmlFor="material-2">Cotton (10)</label>
      <input type="checkbox" id="filter-material material-3" />
      <label htmlFor="material-3">Wool (6)</label>
    </div>
  )
}

export function FilterColor() {
  return (
    <div className="filters_eachFilter filter-color">
      <input type="checkbox" id="filter-color color-1" />
      <label htmlFor="color-1"></label>
      <input type="checkbox" id="filter-color color-2" />
      <label htmlFor="color-2"></label>
      <input type="checkbox" id="filter-color color-3" />
      <label htmlFor="color-3"></label>
    </div>
  )
}

export function FilterSize() {
  return (
    <div className="filters_eachFilter filter-size">
      <input type="checkbox" id="filter-size size-1" />
      <label htmlFor="size-1">XS</label>
      <input type="checkbox" id="filter-size size-2" />
      <label htmlFor="size-2">S</label>
      <input type="checkbox" id="filter-size size-3" />
      <label htmlFor="size-3">M</label>
    </div>
  )
}

export function FilterRating() {
  return (
    <div className="filters_eachFilter filter-rating">
      <input type="checkbox" id="filter-rating rating-1" />
      <label htmlFor="rating-1">1 Star and above</label>
      <input type="checkbox" id="filter-rating rating-2" />
      <label htmlFor="rating-2">2 Star and above</label>
      <input type="checkbox" id="filter-rating rating-3" />
      <label htmlFor="rating-3">3 Star and above</label>
    </div>
  )
}

export function FilterPrice() {
  return (
    <form className="filters_eachFilter filter-price" onInput="o.value=parseInt(p.value)">
      <label className='filter-price-label label-min' htmlFor="filter-price">$650</label>
      <input type="range" min="0" max="100" value="10" id="filter-price" name="p"/>
      <label className='filter-price-label label-max' htmlFor="filter-price">$1,100</label>
      {/* <output className='filter-price-output' htmlFor="filter-price" name="o">output</output> */}
    </form>
  )
}

export function FilterSort() {
  return (
    <div className="filters_eachFilter filter-sort">
      <input type="checkbox" id="filter-sort sort-1" />
      <label htmlFor="sort-1">1 Star and above</label>
      <input type="checkbox" id="filter-sort sort-2" />
      <label htmlFor="sort-2">2 Star and above</label>
      <input type="checkbox" id="filter-sort sort-3" />
      <label htmlFor="sort-3">3 Star and above</label>
    </div>
  )
}

function Filters() {
  return (
    <>
    <div className="productPage_filters-container">
      <div className="productPage-filters_section section-left">
        <div className="productPage_filters_pill-container category">
          <p className="filters_pill-name">Category</p>
          <MdOutlineKeyboardArrowDown size="1.5em"/>
          </div>
        <div className="productPage_filters_pill-container material">
          <p className="filters_pill-name">Material</p>
          <MdOutlineKeyboardArrowDown size="1.5em"/>
          </div>
        <div className="productPage_filters_pill-container colors">
          <p className="filters_pill-name">Color</p>
          <MdOutlineKeyboardArrowDown size="1.5em"/>
          </div>
        <div className="productPage_filters_pill-container size">
          <p className="filters_pill-name">Size</p>
          <MdOutlineKeyboardArrowDown size="1.5em"/>
          </div>
        <div className="productPage_filters_pill-container rating">
          <p className="filters_pill-name">Rating</p>
          <MdOutlineKeyboardArrowDown size="1.5em"/>
          </div>
        <div className="productPage_filters_pill-container price">
          <p className="filters_pill-name">Price</p>
          <MdOutlineKeyboardArrowDown size="1.5em"/>
          </div>
      </div>
      <div className="productPage-filters_section section-right">
        <div className="productPage_filters_pill-container clear-filter">
          <p className="filters_pill-name">Clear</p>
        </div>
        <div className="productPage_filters_pill-container sort">
          <div className="filters_pill_sort-wrapper">
            <p className="filters_pill-name">Sort By</p>
            <p className="filters_pill_sort-type">Relevance</p>
          </div>
          <MdOutlineKeyboardArrowDown size="1.5em"/>
        </div>
      </div>
    </div>
    <FilterPrice />
    </>
  )
}

export default Filters