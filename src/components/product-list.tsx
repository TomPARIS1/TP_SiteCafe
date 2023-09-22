"use client"

import {ProductFilters} from "@/components/product-filters";
import {Button, SectionContainer} from "tp-kit/components";
import {ProductCardLayout, ProductGridLayout} from "tp-kit/components/products";
import {PRODUCTS_CATEGORY_DATA} from "tp-kit/data"
import {ProductFiltersResult} from "@/types";
import {FC, useState} from "react";
import {useMemo} from "react";
import {filterProducts} from "@/utils/filter-products";
import {ProductsCategoryData} from "tp-kit/types";
import Link from "next/link";

type Props = {
    showFilters: boolean,
    categories: ProductsCategoryData[]
}

export const ProductList: FC<Props> = function ({categories, showFilters}) {
    const [filter, setFilter] = useState<ProductFiltersResult>()

    const categFiltered = useMemo(
        () => filterProducts(categories, filter),
        [categories, filter]
    );

    return (
        <div className="flex mx-5">

            {showFilters ? <div className="flex-auto mt-10">
                <ProductFilters categories={categories} onChange={values => setFilter(values)}></ProductFilters>
            </div> : ""}
            <div className="flex-auto">
                {categFiltered.map(category =>
                    <>
                        <SectionContainer>
                            <h1 className="mb-3 text-xl"><b><Link
                                href={'/' + category.slug}>{category.name}</Link> ({category.products.length})</b></h1>

                            <ProductGridLayout products={category.products}>
                                {product => <ProductCardLayout
                                    button={<Button variant="ghost" fullWidth="true">Ajouter au panier</Button>}
                                    product={product}
                                />
                                }
                            </ProductGridLayout>
                        </SectionContainer>
                    </>
                )}
            </div>
        </div>
    );
}