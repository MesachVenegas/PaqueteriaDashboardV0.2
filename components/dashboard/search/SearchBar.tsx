'use client'

import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDebouncedCallback } from 'use-debounce';


export default function SearchBar({ placeholder} : {placeholder: string} ) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const params = new URLSearchParams(searchParams);


  const handleSearch = useDebouncedCallback((data: string) => {
    params.set('page', '1');
    if(data){
      data.length > 1 && params.set('search', data);
    }else {
      params.delete('search');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className='flex max-w-md bg-slate-300/50 dark:bg-slate-600 gap-2 p-2 rounded-lg'>
      <FontAwesomeIcon icon={faSearch} className='w-5 h-5'/>
      <input
        id="search"
        type="search"
        name="search"
        onChange={(e) => handleSearch(e.target.value)}
        className='w-full bg-transparent focus:border-none focus:outline-none'
        placeholder={placeholder}
      />
    </div>
  )
}
