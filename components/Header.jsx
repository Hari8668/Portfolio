import Link from 'next/link'
import React from 'react'
import Nav from './Nav'
import { Button } from './ui/button'
import MobileNav from './MobileNav'
import Image from 'next/image'


const Header = () => {
    return (
      <header className='py-4 lg:py-4  text-white '>
        <div className='container mx-auto flex justify-between items-center'>
          <Link href="/">
            {/* <h1 className='text-4xl font-semibold'>
              H<span className='text-accent'>.</span>
            </h1> */}
            <Image  src="/h9.png" alt='logo' width={30} height={30} />
          </Link>
  
          {/* this is for pc */}
          <div className="hidden lg:flex  xl:flex items-center gap-8">
            <Nav />
          
          </div>
  
          {/* for phone */}
          <div className='xl:hidden'>
            <MobileNav/>
          </div>
        </div>
      </header> 
    )
  }
  
  export default Header