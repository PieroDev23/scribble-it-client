import { AccountNavigation } from '../AccountNavigation';
import { Logo } from '../Logo';
import { Navigation } from '../Navigation';

type HeaderProps = {
    someVar?: boolean;
    someFn?: (param: boolean) => void;
};

function Header(props: HeaderProps) {
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
        <header className='flex justify-between items-center px-14 py-4 border-b border-black'>
            <div className='flex gap-8 items-center'>
                <Logo />
                <Navigation />
            </div>
            <AccountNavigation />
        </header>
    );
}

export { Header };
