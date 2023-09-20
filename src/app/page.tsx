import Image from 'next/image'
import {BreadCrumbs, Button, SectionContainer} from "tp-kit/components";
import { PRODUCTS_CATEGORY_DATA } from "tp-kit/data";
import {ProductCardLayout, ProductGridLayout} from "tp-kit/components/products";
import {ProductFilters} from "@/components/product-filters";
const categories = PRODUCTS_CATEGORY_DATA;

export default function Home() {

    function onChange() {

    }

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

        <div className="flex mx-5">
            <div className="flex-auto mt-10">
                <ProductFilters categories={categories} onChange={onChange()}></ProductFilters>
            </div>
            <div className="flex-auto">
                {categories.map(category =>
                    <>
                        <SectionContainer>
                            <h1 className="mb-3 text-xl"><b>{category.name} ({category.products.length})</b></h1>

                            <ProductGridLayout products={category.products}>
                                {product => <ProductCardLayout
                                    button={<Button variant="ghost" fullWidth="true">Ajouter au panier</Button>}
                                    product={ product }
                                />
                                }
                            </ProductGridLayout>
                        </SectionContainer>
                    </>
                      )}
            </div>
        </div>
    </main>
  )
}
