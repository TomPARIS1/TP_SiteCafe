import Image from 'next/image'
import {BreadCrumbs, Button, SectionContainer} from "tp-kit/components";
import {ProductCardLayout, ProductGridLayout} from "tp-kit/components/products";
import {ProductFilters} from "@/components/product-filters";
import {ProductList} from "@/components/product-list";
import {PRODUCTS_CATEGORY_DATA} from "tp-kit/data";

const categories = PRODUCTS_CATEGORY_DATA;

export default function Home() {

  return (
    <main>
        <div className="mx-5">
            <BreadCrumbs
                items={[
                  {
                    label: 'Accueil',
                    url: '#'
                  }
                ]}
            />
        </div>

        <div>
            <ProductList showFilters={true} categories={categories}></ProductList>
        </div>

    </main>
  )
}
