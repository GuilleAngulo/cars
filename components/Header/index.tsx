import Link from 'next/link';
import { GiCarKey } from 'react-icons/gi';

export default function Header() {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-4xl tracking-tight">
                    <GiCarKey />
                </span>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <Link href="/">
                        <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 text-xl hover:text-white mr-4">
                            Home
                        </a>
                    </Link>
                    <Link href="/faq">
                        <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 text-xl hover:text-white mr-4">
                            FAQ
                        </a>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
