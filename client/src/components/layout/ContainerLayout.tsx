import clsx from 'clsx'
import React from 'react'

function ContainerLayout({children,className}:{children: React.ReactNode,className?:string}) {
  return (
          <div className={clsx('max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8',className)}>
            {children}
          </div>
  )
}

export default ContainerLayout