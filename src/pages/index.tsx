import { GetServerSideProps } from 'next';
import { getMakes, getModels } from 'database/api/car';
import { ModelSelect, MakeSelect } from 'database/models/Car';
import Search from 'components/Search';
import { getAsString } from 'utils';
import SEO from 'components/SEO';

export interface HomeProps {
    makes: MakeSelect[];
    models: ModelSelect[];
}

export default function Home({ makes, models }: HomeProps) {
    return (
        <>
            <SEO
                title={'Home'}
                description={'Find used cars for sale near your area.'}
                canonicalPath={`/`}
            />
            <div className="container m-12 mx-auto px-6 py-6 rounded shadow-lg xl:w-2/6 lg:w-2/6 md:w-3/6 sm:w-3/6">
                <Search makes={makes} models={models} />
            </div>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const make = getAsString(context.query.make || '') || 'all';

    const [makes, models] = await Promise.all([getMakes(), getModels(make)]);

    return { props: { makes, models } };
};
