import React, { FC, useState, useEffect } from 'react'
import { Product } from "@/interfaces";
import useInput from '@hooks/useInput'

// Components
import Section from './Section'
import ProductGrid from '@components/product/ProductGrid'

type T = {
  products: Product[];
}

const Collection: FC<T> = ({ products }) => {
  // Filter
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [productsVisible, setProductsVisible] = useState<Product[]>([])
  const [category, setCategory] = useInput('')
  const [sortOption, setSortOption] = useState({})

  // Categories
  const categories = [...new Set( products.map(x => x.productType))]

  const sortOptions = [
    {
      title: 'High to low',
      name: 'priceToLow',
    },
    {
      title: 'Low to High',
      name: 'priceToHigh',
    },
   ]

  useEffect(() => {
    // Return all if nothing (aka Categories) is selected
    if (category === 'Categories') return setFilteredProducts(products)

    const result = products.filter(x => x.productType === category)
    setFilteredProducts(result)
  }, [category])


  useEffect(() => {
    if (!sortOption) return;
    let sorted = filteredProducts
    const priceToLow = ( arr: Product[] ) => arr.sort((a, b) => parseInt(a.variants[0].price) - parseInt(b.variants[0].price))
    const priceToHigh =  (arr: Product[] ) => arr.sort((a, b) => parseInt(b.variants[0].price) - parseInt(a.variants[0].price))

    if (sortOption === 'priceToLow') sorted = priceToLow(filteredProducts)
    if (sortOption === 'priceToHigh') sorted = priceToHigh(filteredProducts)
    
    setProductsVisible(sorted)
  }, [filteredProducts, sortOption])



  return (
    <Section>
      <nav className="product-filter">

        <div className="sort">

          <div className="collection-sort">
            <label>Filter by:</label>
            <select onChange={setCategory} value={category}>
              <option selected>Categories</option>

              {
                categories.map(c =>  <option key={c} value={c}>{c}</option>)
              }
            </select>
          </div>

          <div className="collection-sort">
            <label>Sort by:</label>
            <select onChange={(e) => setSortOption(e.target.value)} value={sortOption}>
              {
                sortOptions.map(c =>  <option key={c.title} value={c.name}>{c.title}</option>)
              }
            </select>
          </div>

        </div>

    </nav>
      <ProductGrid products={productsVisible} />
    </Section>
  )
}

export default Collection