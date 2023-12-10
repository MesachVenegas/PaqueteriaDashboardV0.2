import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function SearchBar({ placeholder} : {placeholder: string} ) {
  return (
    <div className='flex max-w-md bg-slate-300/50 dark:bg-slate-600 gap-2 p-2 rounded-lg'>
      <FontAwesomeIcon icon={faSearch} className='w-5 h-5'/>
      <input
        id="search"
        type="search"
        name="search"
        className='w-full bg-transparent focus:border-none focus:outline-none'
        placeholder={placeholder}
      />
    </div>
  )
}
