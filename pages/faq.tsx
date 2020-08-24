import { GetStaticProps } from 'next';
import { FaqModel } from 'database/models/Faq';
import db from 'database/connection';

interface FaqProps {
    faq: FaqModel[];
}

export default function Faq({ faq }: FaqProps) {
    return (
        <>
            <div className="text-3xl text-center font-bold mt-20">
                <h1>Have any questions ?</h1>
            </div>
            <div className="m-24">
                <div className="grid grid-cols-2 gap-12">
                    {faq.map((item) => {
                        return (
                            <div key={item.id}>
                                <div>
                                    <span className="text-xl font-bold">{item.question}</span>
                                </div>
                                <div className="mt-2">
                                    <span className="text-l">{item.answer}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const faq = await db('faq');
    return {
        props: { faq },
    };
};
