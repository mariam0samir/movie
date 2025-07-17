import React from 'react'
import './SearchForm.css'


export default function SearchForm({ value, searchInputRef, onChange }) {
  return (
    <div  className="search-form py-4 bg-blue rounded mt-4 mx-4 mb-5 ">
      <form className="d-flex justify-content-between">
        <input
          onChange={onChange}
          value={value}
          ref={searchInputRef}
          className="py-2 my-1 mx-4 px-3 w-100 bg-dark-blue rounded text-white"
          dir="auto"
          type="search"
          placeholder="Search"
        />
      </form>
    </div>
  )
}
