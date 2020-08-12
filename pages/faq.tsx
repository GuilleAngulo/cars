import { GetStaticProps } from 'next';
import { FaqModel } from 'api/Faq';
import db from 'database/connection';

interface FaqProps {
    faq: FaqModel[];
}

export default function Faq({ faq }: FaqProps) {
    return (
        <div className="bg-gray-200 p-4">
            {faq.map((item) => {
                return (
                    <div key={item.id}>
                        <span className="block text-gray-700 text-center rounded-lg bg-gray-400 px-4 py-2">
                            {item.question}
                        </span>
                        <span className="block text-gray-700 text-center rounded-lg bg-green-200 px-4 py-2">
                            {item.answer}
                        </span>
                    </div>
                );
            })}
        </div>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const faq = await db('faq');
    return {
        props: { faq },
    };
};
