import { IconDefinition, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { MouseEventHandler } from 'react'

export default function Button({
  className,
  icon,
  text,
  action,
  type,
  source
}:{
  className?: string,
  icon: IconDefinition,
  text: string,
  type: 'link' | 'button',
  action?: MouseEventHandler,
  source?: string
}) {

  if(type === 'link'){
    return (
      <Link href={source? source : '#'} className={className ? className : 'flex gap-2 items-center py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded-lg text-white'} onClick={action}>
        <FontAwesomeIcon icon={icon} className='w-5 h-5' />
        <span className='hidden lg:block'>{text}</span>
      </Link>
    )
  }else {
    return (
      <button className={className ? className : 'flex gap-2 items-center py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded-lg text-white'} onClick={action}>
        <FontAwesomeIcon icon={icon} className='w-5 h-5' />
        <span className='hidden lg:block'>{text}</span>
      </button>
    )
  }

}
