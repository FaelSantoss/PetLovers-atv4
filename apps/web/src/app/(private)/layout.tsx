import type { ReactNode } from 'react'

import { ProductLayout } from '../../ui/components/layouts/products'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return <ProductLayout>{children}</ProductLayout>
}

export default Layout
