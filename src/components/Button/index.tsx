import { FaArrowLeft, FaSearch } from 'react-icons/fa';
import Link from 'next/link';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
    classType: 'search' | 'back';
    text?: string;
    pathName?: string;
    width?: string;
}

export default function Button({ classType, text, pathName, ...props }: ButtonProps) {
    switch (classType) {
        case 'search':
            return (
                <button
                    type="submit"
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded inline-flex items-center justify-center my-5"
                    style={{ ...props }}
                >
                    <span className="mr-2">
                        <FaSearch />
                    </span>
                    {text || 'Search'}
                </button>
            );
        case 'back':
            return (
                <Link href={pathName || '/cars'}>
                    <button
                        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded inline-flex items-center justify-center my-5"
                        style={{ ...props }}
                    >
                        <span className="mr-2">
                            <FaArrowLeft />
                        </span>
                        {text || 'Back'}
                    </button>
                </Link>
            );

        default:
            return (
                <button
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded inline-flex items-center justify-center my-5"
                    style={{ ...props }}
                >
                    {text || 'Button'}
                </button>
            );
    }
}
