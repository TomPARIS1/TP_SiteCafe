import {ProductFilters} from '@/components/product-filters';
import ProductList from '@/components/product-list';
import Image from 'next/image'
import {notFound} from 'next/navigation'
import {ProductRating} from 'tp-kit/components';
import {BreadCrumbs, Button, Heading, ProductCardLayout, ProductGridLayout, SectionContainer} from 'tp-kit/components';
import {PRODUCTS_CATEGORY_DATA} from "tp-kit/data";

const categories = PRODUCTS_CATEGORY_DATA;

type NextPageProps<T = Record<string, string>> = {
    params: T,
    searchParams: { [key: string]: string | string[] | undefined }
}

type Props = {
    categorySlug: string
    productSlug: string
}

export default function Home({params}: NextPageProps<Props>) {
    const currentcategories = categories.filter(category => {
        return category.slug == params.categorySlug
    })[0]

    if (!currentcategories) notFound();

    const currentproduct = currentcategories.products.filter(product => {
        return product.slug == params.productSlug
    })[0]

    if (!currentproduct) notFound();

    return (
        <main>
            <SectionContainer>
                <BreadCrumbs
                    items={[
                        {
                            label: 'Accueil',
                            url: '/'
                        }, {
                            label: currentcategories.name,
                            url: '/' + params.categorySlug
                        }, {
                            label: currentproduct.name,
                            url: '/' + params.categorySlug + "/" + params.productSlug
                        }
                    ]}
                />
            </SectionContainer>
            <SectionContainer>
                <div className='flex flex-row max-lg:flex-col items-center'>
                    <div className='m-5 overflow-hidden rounded-xl'>
                        <Image
                            className='transition-transform hover:scale-110 brightness-95 saturate-150 !w-full !h-auto'
                            width={512} height={512} alt={currentproduct.slug} src={currentproduct.img}></Image>
                    </div>
                    <article className='prose lg:prose-xl ml-5 flex flex-col justify-between '>
                        <h1>{currentproduct.name}</h1>
                        <ProductRating value={Math.random() * 5} size={24}/>
                        <p>{currentproduct.desc}</p>
                        <section className='flex justify-between'>
                            <span className='text-xl'>{currentproduct.price} €</span>
                            <Button>Ajouter au panier</Button>
                        </section>
                    </article>

                </div>
            </SectionContainer>
            <SectionContainer>
                <Heading as="h1" weight="bold" size="lg">Vous pourriez aussi aimer</Heading>
                <ProductGridLayout products={currentcategories.products.filter(product => {
                    return product.slug != params.productSlug
                })}>
                    {(product) => <ProductCardLayout key={product.id}
                                                     button={<Button variant="ghost">Ajouter au panier</Button>}
                                                     product={{
                                                         desc: product.desc,
                                                         id: product.id,
                                                         img: product.img,
                                                         name: product.name,
                                                         path: product.path,
                                                         price: product.price,
                                                         slug: product.slug
                                                     }}
                    />}

                </ProductGridLayout>
            </SectionContainer>

        </main>
    )
}