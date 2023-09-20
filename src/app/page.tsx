import Image from 'next/image'
import {BreadCrumbs, Button, SectionContainer} from "tp-kit/components";
import { PRODUCTS_CATEGORY_DATA } from "tp-kit/data";
import {ProductCardLayout, ProductGridLayout} from "tp-kit/components/products";
const categories = PRODUCTS_CATEGORY_DATA;

export default function Home() {
  return (
    <main>
        <BreadCrumbs
            items={[
              {
                label: 'Accueil',
                url: '#'
              }
            ]}
        />
            {categories.map(category =>
                <>
                <h1><b>{category.name} ({category.products.length})</b></h1>
                <ProductGridLayout products={category.products}>
                    {product => <ProductCardLayout
                        button={<Button variant="ghost" fullWidth="true">Ajouter au panier</Button>}
                        product={ product }
                    />
                    }
                </ProductGridLayout>
                </>
                  )}
    </main>
  )
}
