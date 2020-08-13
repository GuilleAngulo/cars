import { GetServerSideProps } from 'next';
import { getMakes } from 'api/car';
import { CarMake } from 'database/models/Car';
import { Formik, Form, Field } from 'formik';
import { useRouter } from 'next/router';

export interface HomeProps {
    makes: CarMake[];
}

const prices = [500, 1000, 5000, 15000, 25000, 50000];

export default function Home({ makes }: HomeProps) {
    const { query } = useRouter();

    const initialValues = {
        make: query.make || 'all',
        model: query.model || 'all',
        minPrice: query.minPrice || 'all',
        maxPrice: query.maxPrice || 'all',
    };

    return (
        <Formik initialValues={initialValues} onSubmit={() => {}}>
            {({ values }) => (
                <Form>
                    <div className="container px-6 py-6 mx-auto m-12 shadow-2xl rounded-md">
                        <div className="w-full lg:max-w-full lg:flex">
                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label
                                    id="search-make"
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
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
                                                value={make.make}
                                            >{`${make.make} (${make.count})`}</option>
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
                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label
                                    id="search-make"
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
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
                                                value={make.make}
                                            >{`${make.make} (${make.count})`}</option>
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
                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label
                                    id="search-min-price"
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
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
                                        <option className="italic" value="all" label="No minimum price" />
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
                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label
                                    id="search-max-price"
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
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
                                        <option className="italic" value="all" label="No maximum price" />
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
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    const makes = await getMakes();
    return { props: { makes } };
};
