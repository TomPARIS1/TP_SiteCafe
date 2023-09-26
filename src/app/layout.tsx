import './globals.css'
import type {Metadata} from 'next'
import {Lexend} from 'next/font/google'
import {Providers} from "@/components/providers";
import {Footer} from 'tp-kit/components'
import Menu from '@/components/menu'

const lexend = Lexend({subsets: ['latin']})

export const metadata: Metadata = {
    title: {
        template: '%s - Starbucks',
        default: 'Starbucks'
    },
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={lexend.className}>
                <header><Menu/></header>
                    <Providers font={lexend}>{children}</Providers>
                <Footer/>
            </body>
        </html>
    )
}
