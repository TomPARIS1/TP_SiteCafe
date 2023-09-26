import { ProductFilters } from '@/components/product-filters';
import { ProductList } from '@/components/product-list';
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { BreadCrumbs, Button, Heading, ProductCardLayout, ProductGridLayout, SectionContainer } from 'tp-kit/components';
import { PRODUCTS_CATEGORY_DATA } from "tp-kit/data";
import { Metadata } from 'next';
const categories = PRODUCTS_CATEGORY_DATA;

type NextPageProps<T = Record<string, string>> = {
    params: T,
    searchParams: { [key: string]: string | string[] | undefined }
}

type Props = {
    categorySlug : string
}

export async function generateMetadata({params} : NextPageProps<Props>) : Promise<Metadata> {
    const currentcategory = categories.filter(category => {
        return category.slug == params.categorySlug
    })[0]

    if (!currentcategory) notFound();

    return {
        title: currentcategory.name,
        description: "Trouvez votre inspiration avec un vaste choix de boissons Starbucks parmi nos produits " + currentcategory.name
    }
}

export default function Home({params} : NextPageProps<Props>) {
    let currentcategories = categories.filter(category => {
        return category.slug == params.categorySlug
    })

    if (!currentcategories.length) notFound();

    return (
        <main>
            <SectionContainer>
                <BreadCrumbs
                    items={[
                        {
                            label: 'Accueil',
                            url: '/'
                        },{
                            label: currentcategories[0].name,
                            url: '/'+params.categorySlug
                        }
                    ]}
                />
                <ProductList showFilters={false} categories={currentcategories}/>
            </SectionContainer>
        </main>
    )
}