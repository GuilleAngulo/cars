import { GetStaticProps } from "next";
import db from "database/connection";
import { FaqModel } from "api/Faq";

interface FaqProps {
  faq: FaqModel[];
}

export default function Faq({ faq }: FaqProps) {
  return <div>{faq}</div>;
}

export const getStaticProps: GetStaticProps = async () => {
  console.log(db('faq').first());
  const faq = await db("cars");
  console.log(faq);
  return {
    props: { faq },
  };
};
