import Knex from "knex";

export async function seed(knex: Knex) {
  await knex("faq").del();
  return knex("faq").insert([
    {
      id: 1,
      question: "How to be safe buying online?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo",
      createDate: new Date(),
    },
    {
      id: 2,
      question: "Do I have any assurance on my new car?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo",
      createDate: new Date(),
    },
    {
      id: 3,
      question: "How many kilometers a normal car can have?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo",
      createDate: new Date(),
    },
    {
      id: 4,
      question: "What is the best month to buy a car?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo",
      createDate: new Date(),
    },
    {
      id: 5,
      question: "How to know the car history?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo",
      createDate: new Date(),
    },
  ]);
}
