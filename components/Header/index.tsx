import Link from 'next/link';

export default function Header() {
    return (
        <nav className="bg-white px-8 pt-2 shadow-md">
            <div className="-mb-px flex justify-center">
                <Link href="/">
                    <a className="no-underline text-gray-900 text-opacity-50 hover:text-opacity-100 border-b-4 border-transparent focus:border-blue-300 uppercase tracking-wide font-bold text-l py-3 mr-8">
                        Home
                    </a>
                </Link>
                <Link href="/faq">
                    <a className="no-underline text-gray-900 text-opacity-50 hover:text-opacity-100 border-b-4 border-transparent focus:border-blue-300 uppercase tracking-wide font-bold text-l py-3 mr-8">
                        Faq
                    </a>
                </Link>
            </div>
        </nav>
    );
}
