'use client'

import { type ReactNode } from 'react'

import { Nav } from './navbar'

type ProductProps = {
  children: ReactNode
}

export const ProductLayout = ({ children }: ProductProps) => {
  return (
    <body>
      <div>
          <Nav />
      </div>
      <main className='pl-6 md:pl-60 py-6 pr-6'>{children}</main>
    </body>
  )
}