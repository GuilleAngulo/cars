import { FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

export interface BackButtonProps {
    text: string;
    pathName: string;
}

export default function BackButton({ text, pathName }: BackButtonProps) {
    return (
        <Link href={pathName}>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded inline-flex items-center my-5">
                <span className="mr-2">
                    <FaArrowLeft />
                </span>
                {text}
            </button>
        </Link>
    );
}
