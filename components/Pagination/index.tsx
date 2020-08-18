import Link from 'next/link';
import { ParsedUrlQuery } from 'querystring';
import { getAsString } from 'utils';
import { useRouter } from 'next/router';

interface PaginationProps {
    totalPages: number;
    totalItems: number;
}

export default function Pagination({ totalPages, totalItems }: PaginationProps) {
    const { query } = useRouter();
    const page = parseInt(getAsString(query.page)) || 1;

    return (
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div className="flex-1 flex justify-between sm:hidden">
                {page > 1 ? (
                    <PaginationLink page={page - 1} query={query}>
                        <a className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
                            Previous
                        </a>
                    </PaginationLink>
                ) : (
                    <a className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white">
                        Previous
                    </a>
                )}
                {page < totalPages ? (
                    <PaginationLink page={page + 1} query={query}>
                        <a className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
                            Next
                        </a>
                    </PaginationLink>
                ) : (
                    <a className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white cursor-not-allowed">
                        Next
                    </a>
                )}
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <ResultDetails page={page} totalPages={totalPages} totalItems={totalItems} />
                <div>
                    <nav className="relative z-0 inline-flex shadow-sm">
                        {page > 1 && (
                            <PaginationLink page={page - 1} query={query}>
                                <a
                                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
                                    aria-label="Previous"
                                >
                                    <PreviousPageSVG />
                                </a>
                            </PaginationLink>
                        )}

                        {[...Array(totalPages)].map((_, i) => (
                            <PaginationLink page={i + 1} query={query} key={i}>
                                <a
                                    key={i}
                                    className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 active:border-blue-300 active:shadow-outline-blue transition ease-in-out duration-150"
                                >
                                    {i + 1}
                                </a>
                            </PaginationLink>
                        ))}

                        {page < totalPages ? (
                            <PaginationLink page={page + 1} query={query}>
                                <a
                                    className="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
                                    aria-label="Next"
                                >
                                    <NextPageSVG />
                                </a>
                            </PaginationLink>
                        ) : (
                            <a
                                className="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 text-gray-400"
                                aria-label="Next"
                            >
                                <NextPageSVG />
                            </a>
                        )}
                    </nav>
                </div>
            </div>
        </div>
    );
}

interface PaginationLinkProps {
    query: ParsedUrlQuery;
    page: number;
    children: JSX.Element;
}

function PaginationLink({ query, page, children }: PaginationLinkProps) {
    return (
        <Link
            href={{
                pathname: '/cars',
                query: { ...query, page },
            }}
            shallow
        >
            {children}
        </Link>
    );
}

interface ResultDetailsProps {
    page: number;
    totalPages: number;
    totalItems: number;
}

function ResultDetails({ page, totalPages, totalItems }: ResultDetailsProps) {
    const itemsPerPage = Math.ceil(totalItems / totalPages);
    const first = (page - 1) * itemsPerPage + 1;
    const last = page === totalPages ? totalItems : (page - 1) * itemsPerPage + itemsPerPage;

    return (
        <div>
            <p className="text-sm leading-5 text-gray-700">
                Showing
                <span className="font-medium mx-1">{first || 0}</span>
                to
                <span className="font-medium mx-1">{last || 0}</span>
                of
                <span className="font-medium mx-1">{totalItems}</span>
                results
            </p>
        </div>
    );
}

const NextPageSVG = () => {
    return (
        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
            />
        </svg>
    );
};

const PreviousPageSVG = () => {
    return (
        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
            />
        </svg>
    );
};
