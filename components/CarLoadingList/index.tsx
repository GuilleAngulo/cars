import CarItemLoading from 'components/CardItemLoading';

export interface CarLoadingListProps {
    count: number;
}

export default function CarLoadingList({ count }: CarLoadingListProps) {
    return (
        <>
            {[...Array(count)].map((item) => {
                <CarItemLoading key={item} />;
            })}
        </>
    );
}
