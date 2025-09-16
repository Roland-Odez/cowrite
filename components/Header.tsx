import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = ({children, className}: HeaderProps) => {
  return (
    <div className={cn('header', className)}>
        <Link href='/' className='md:flex-1 flex items-center'>
            <Image
                src='/assets/icons/logo-icon.svg'
                alt='logo'
                height={32}
                width={32}
            />
            <h1 className='text-white hidden md:block'>coWrite</h1>
        </Link>
        {children}
    </div>
  )
}

export default Header