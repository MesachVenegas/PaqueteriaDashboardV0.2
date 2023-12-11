'use client'

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ButtonProps } from '@/app/libs/definitions'

export default function Button({ icon, text, action, type, source, color }: ButtonProps) {



  if(type === 'link'){
    return (
      <Link href={source? source : '#'} className={
          color ? `flex gap-2 items-center py-2 px-4 bg-${color}-500 hover:bg-${color}-600 rounded-lg text-white`
          :'flex gap-2 items-center py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded-lg text-white'
        }
        onClick={action}
      >
        {
          icon ? <FontAwesomeIcon icon={icon} className='w-5 h-5' /> : null
        }
        <span className='hidden lg:block'>{text}</span>
      </Link>
    )
  }else {
    return (
      <button className={
        color ? `flex gap-2 items-center py-2 px-4 bg-${color}-500 hover:bg-${color}-600 rounded-lg text-white`
        : 'flex gap-2 items-center py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded-lg text-white'
        }
        onClick={action}
      >
        {
          icon ? <FontAwesomeIcon icon={icon} className='w-5 h-5' /> : null
        }
        <span className='hidden lg:block'>{text}</span>
      </button>
    )
  }

}
