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
        <header>
            <div>
                <Logo />
                <Navigation />
            </div>

            <AccountNavigation />
        </header>
    );
}

export { Header };
