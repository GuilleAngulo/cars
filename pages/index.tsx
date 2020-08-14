import { GetServerSideProps } from 'next';
import { getMakes, getModels } from 'database/api/car';
import { ModelSelect, MakeSelect } from 'database/models/Car';
import { Formik, Form, Field, useField } from 'formik';
import router, { useRouter } from 'next/router';
import { getAsString } from 'utils';
import useSWR from 'swr';

export interface HomeProps {
    makes: MakeSelect[];
    models: ModelSelect[];
}

const prices = [10000, 50000, 150000, 250000, 500000, 1000000];

export default function Search({ makes, models }: HomeProps) {
    const { query } = useRouter();

    const initialValues = {
        make: getAsString(query.make || '') || 'all',
        model: getAsString(query.model || '') || 'all',
        minPrice: getAsString(query.minPrice || '') || 'all',
        maxPrice: getAsString(query.maxPrice || '') || 'all',
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
                router.push(
                    {
                        pathname: '/cars',
                        query: { ...values, page: 1 },
                    },
                    undefined,
                    { shallow: true },
                );
            }}
        >
            {({ values }) => (
                <Form>
                    <div className="container m-12 mx-auto px-6 py-6 shadow-2xl rounded-md xl:w-2/6 lg:w-2/6 md:w-3/6 sm:w-3/6">
                        <div className="flex flex-col">
                            <div className="text-center w-full px-3 mb-6 md:mb-0 my-2">
                                <label
                                    id="search-make"
                                    className="block uppercase tracking-wide text-gray-700 text-xs text-left font-bold mb-2"
                                >
                                    Make
                                </label>
                                <div className="relative">
                                    <Field
                                        as="select"
                                        name="make"
                                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="search-make"
                                    >
                                        <option className="italic" value="all" label="All Makes" />
                                        {makes.map((make, index) => (
                                            <option
                                                key={index}
                                                value={make.name}
                                            >{`${make.name} (${make.count})`}</option>
                                        ))}
                                    </Field>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg
                                            className="fill-current h-4 w-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <ModelSelector make={values.make} name="model" models={models} />
                            <div className="text-center w-full px-3 mb-6 md:mb-0 my-2">
                                <label
                                    id="search-min-price"
                                    className="block uppercase tracking-wide text-gray-700 text-xs text-left font-bold mb-2"
                                >
                                    Min Price
                                </label>
                                <div className="relative">
                                    <Field
                                        as="select"
                                        name="minPrice"
                                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="search-min-price"
                                    >
                                        <option
                                            className="italic"
                                            value="all"
                                            label="No minimum price"
                                        />
                                        {prices.map((price, index) => (
                                            <option key={index} value={price}>
                                                {price}
                                            </option>
                                        ))}
                                    </Field>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg
                                            className="fill-current h-4 w-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center w-full px-3 mb-6 md:mb-0 my-2">
                                <label
                                    id="search-max-price"
                                    className="block uppercase tracking-wide text-gray-700 text-xs text-left font-bold mb-2"
                                >
                                    Max Price
                                </label>
                                <div className="relative">
                                    <Field
                                        as="select"
                                        name="maxPrice"
                                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="search-max-price"
                                    >
                                        <option
                                            className="italic"
                                            value="all"
                                            label="No maximum price"
                                        />
                                        {prices.map((price, index) => (
                                            <option key={index} value={price}>
                                                {price}
                                            </option>
                                        ))}
                                    </Field>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg
                                            className="fill-current h-4 w-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-5 py-5">
                            <button
                                type="submit"
                                className="bg-transparent w-full hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export interface ModelSelectProps {
    name: string;
    models: ModelSelect[];
    make: string;
}

export function ModelSelector({ models, make, ...props }: ModelSelectProps) {
    const [field] = useField({
        name: props.name,
    });

    const { data } = useSWR<MakeSelect[]>('/api/models?make=' + make, {
        //Dedupe requests with the same key in this time span
        dedupingInterval: 60000,
    });

    const newModels = data || models;

    return (
        <div className="text-center w-full px-3 mb-6 md:mb-0 my-2">
            <label
                id="search-model"
                className="block uppercase tracking-wide text-gray-700 text-xs text-left font-bold mb-2"
            >
                Model
            </label>
            <div className="relative">
                <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="search-model"
                    {...field}
                    {...props}
                >
                    <option className="italic" value="all" label="All Models" />
                    {newModels.map((model, index) => (
                        <option
                            key={index}
                            value={model.name}
                        >{`${model.name} (${model.count})`}</option>
                    ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    //const make = getAsString(context.query.make);

    const make = getAsString(context.query.make || '') || 'all';

    const [makes, models] = await Promise.all([getMakes(), getModels(make)]);

    return { props: { makes, models } };
};
