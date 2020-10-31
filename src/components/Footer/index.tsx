import { routes } from 'components/Header';
import Link from 'next/link';
import { capitalize } from 'utils';

export default function Footer() {
    return (
        <footer className="w-full text-center border-t border-grey bg-gray-300 p-8">
            <div className="sm:flex mb-2">
                <div className="sm:w-1/4 sm:mt-0 mt-8 ml-8 text-left">
                    <div className="text-blue mb-4">Navigate</div>
                    <ul className="list-reset leading-normal">
                        {routes.map((route) => (
                            <li
                                className="hover:text-blue text-gray-800 text-opacity-50 hover:text-opacity-100"
                                key={route.key}
                            >
                                <Link href={route.href}>
                                    <a>{capitalize(route.key)}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
}
