module.exports = {
  async seed(knex) {
    await knex("cars").del();
    return knex("cars").insert([
      {
        id: 1,
        make: "Audi",
        model: "A3",
        year: 2019,
        fuelType: "Diesel",
        kilometers: 1231231,
        details:
          "Em 2019 a Audi completa 25 anos de presença oficial da marca no Brasil e, para celebrar, lançamos o A3 Sedan Prestige Plus 25 Anos. Produzido atualmente em São José dos Pinhais - PR, o modelo ícone da marca está em sua terceira geração e recebeu diversas atualizações para esta edição especial, que contará com apenas 600 unidades",
        price: 13485,
        photoUrl:
          "https://www.audi.com.br/content/dam/nemo/br/models/A3/a3_sedan_11400x840px.jpg",
      },
    ]);
  },
};
