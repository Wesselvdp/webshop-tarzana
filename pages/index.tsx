import React, { FC } from 'react'
import Layout from '@components/structure/layout'
type T = any

const HomePage: FC<T> = () => {
  return (
    <div>
     <Layout>
       Hello world
     </Layout>
    </div>
  )
}

export default HomePage