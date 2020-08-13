import Search from 'pages/index';

export default function CarsList() {
    return (
        <div className="w-full lg:max-w-full lg:flex">
            <div className="w-2/6">
                <Search makes={[]} models={[]} />
            </div>
            <div className="w-4/6">Coches</div>
        </div>
    );
}
