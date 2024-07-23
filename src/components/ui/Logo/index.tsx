import React from 'react';
import { domine } from '@app/fonts';
import Link from 'next/link';


type LogoProps = {
    someVar?: boolean;
    someFn?: (param: boolean) => void;
};


function Logo(props: LogoProps) {
    /**
     * Initializers
     */

    /**
     * Contexts
     */

    /**
     * Functions
     */

    /**
     * Hooks
     */

    /**
     * Renders
     */
    return (
        <React.Fragment>
            <Link href={'/lol'} className={`${domine.className} text-2xl antialiased underline font-bold`}>
                Scribble it!
            </Link>
        </React.Fragment>
    );
}

export { Logo };