"use client"

import type {FC} from 'react';
import {NextFont} from "next/dist/compiled/@next/font";
import {ReactNode} from "react";
import {MantineCustomThemeProvider} from "tp-kit/components/providers";

type Props = {
    font: NextFont,
    children: ReactNode
}

export const Providers: FC<Props> = function ({font, children}) {

    return (
        <MantineCustomThemeProvider font={font}>{children}</MantineCustomThemeProvider>
    );
}