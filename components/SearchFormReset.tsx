'use client'

import Link from "next/link";
import { X } from 'lucide-react'

const SearchFormReset = () => {
  // * reset form
  const reset = () => {
    const form = document.querySelector('.search-form') as HTMLFormElement;

    if (form) {
      form.reset()
    }
  }

  return (
    <div className='flex gap-2'>
      <button type='reset' onClick={reset}>
        <Link href='/' className='search-btn text-white'>
          <X className="size-5" />
        </Link>
      </button>
    </div>
  )
}

export default SearchFormReset