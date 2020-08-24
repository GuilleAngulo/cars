export interface CarLoadingListProps {
    count: number;
}

export default function CarLoadingList({ count }: CarLoadingListProps) {
    return (
        <>
            {[...Array(count)].map((_, index) => (
                <CarItemLoading key={index} />
            ))}
        </>
    );
}

export function CarItemLoading() {
    return (
        <div className="border border-gray-300 shadow-lg rounded-md max-w-sm w-full">
            <div className="animate-pulse h-full">
                <div className="rounded relative pb-2/3">
                    <div className="absolute rounded bg-gray-400 w-full h-full"></div>
                </div>
                <div className="px-6 py-4">
                    <div className="h-6 bg-gray-400 rounded w-3/4 mb-4"></div>
                    <div className="h-5 bg-gray-400 rounded w-1/4 mb-4"></div>
                    <div className="space-y-2">
                        <div className="h-4 bg-gray-400 rounded"></div>
                        <div className="h-4 bg-gray-400 rounded"></div>
                        <div className="h-4 bg-gray-400 rounded"></div>
                        <div className="h-4 bg-gray-400 rounded"></div>
                        <div className="h-4 bg-gray-400 rounded"></div>
                        <div className="h-4 bg-gray-400 rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
