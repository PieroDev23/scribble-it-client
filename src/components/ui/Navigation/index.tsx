import Link from 'next/link';
import React from 'react';

type NavigationProps = {
    someVar?: boolean;
    someFn?: (param: boolean) => void;
};

const navItems = [
    {
        name: 'Why Scribble It?',
        route: '#why'
    },
    {
        name: 'Newsletter',
        route: '#newsletter'
    },
    {
        name: 'Blog',
        route: '/blog'
    }
]

function Navigation(props: NavigationProps) {
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
        <nav className='flex gap-4'>
            {
                navItems.map(item => <Link className='hover:underline' key={item.route} href={item.route} children={item.name} />)
            }
        </nav>
    );
}

export { Navigation };