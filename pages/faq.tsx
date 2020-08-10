import { GetStaticProps } from 'next';
import { FaqModel } from 'api/Faq';
import db from 'database/connection';

interface FaqProps {
    faq: FaqModel[];
}

export default function Faq({ faq }: FaqProps) {
    return (
        <div>
            {faq.map((item) => (
                <div key={item.id}>
                    {item.question} | {item.answer}
                </div>
            ))}
        </div>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const faq = await db('faq');
    return {
        props: { faq },
    };
};
