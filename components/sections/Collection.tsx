import React, { FC, useState, useEffect } from "react";
import { Product } from "@/types/interfaces";
import useInput from "@hooks/useInput";

// Components
import Section from "./Section";
import ProductGrid from "@components/product/ProductGrid";

import useSort from "@hooks/useSort";

type T = {
  products: Product[];
};

const Collection: FC<T> = ({ products }) => {
  // Filter
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [productsVisible, setProductsVisible] = useState<Product[]>([]);
  const [category, setCategory] = useInput("Categories");
  const [sortOption, setSortName, sortOptions] = useSort();

  // Categories
  const categories = [...new Set(products.map((x) => x.productType))];

  useEffect(() => {
    // Return all if nothing (aka Categories) is selected
    if (category === "Categories") return setFilteredProducts(products);

    const result = products.filter((x) => x.productType === category);
    setFilteredProducts(result);
  }, [category]);

  useEffect(() => {
    let sorted = filteredProducts;
    // if (sortOption === "") return setProductsVisible(sorted);
    console.log("sortOption is", sortOption.name);
    const priceToLow = (arr: Product[]) =>
      arr.sort(
        (a, b) => parseInt(a.variants[0].price) - parseInt(b.variants[0].price)
      );
    const priceToHigh = (arr: Product[]) =>
      arr.sort(
        (a, b) => parseInt(b.variants[0].price) - parseInt(a.variants[0].price)
      );

    if (sortOption.name === "priceToLow") sorted = priceToLow(filteredProducts);
    if (sortOption.name === "priceToHigh")
      sorted = priceToHigh(filteredProducts);

    setProductsVisible(sorted);
  }, [filteredProducts, sortOption]);

  return (
    <Section>
      <nav className="product-filter">
        <div className="sort">
          <div className="collection-sort">
            <label>Filter by:</label>
            <select onChange={(e) => setCategory(e)} value={category}>
              <option value={"Categories"}>Categories</option>

              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className="collection-sort">
            <label>Sort by:</label>
            <select
              onChange={(e) => setSortName(e.target.value)}
              value={sortOption.name}
            >
              {sortOptions.map((c: any) => (
                <option key={c.title} value={c.name}>
                  {c.title}
                </option>
              ))}
            </select>
          </div>
        </div>
      </nav>
      <ProductGrid products={productsVisible} />
    </Section>
  );
};

export default Collection;
