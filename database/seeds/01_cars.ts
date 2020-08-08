import Knex from "knex";

export async function seed(knex: Knex) {
  await knex("cars").del();
  return knex("cars").insert([
    {
      id: 1,
      make: "Audi",
      model: "A3",
      year: 2019,
      fuelType: "Petrol",
      kilometers: 1231231,
      details:
        "Em 2019 a Audi completa 25 anos de presença oficial da marca no Brasil e, para celebrar, lançamos o A3 Sedan Prestige Plus 25 Anos. Produzido atualmente em São José dos Pinhais - PR, o modelo ícone da marca está em sua terceira geração e recebeu diversas atualizações para esta edição especial, que contará com apenas 600 unidades.",
      price: 13485,
      photoUrl:
        "https://res.cloudinary.com/guillermoangulo/image/upload/v1596898787/cars/audi-A3-sedan.jpg",
    },
    {
      id: 2,
      make: "Audi",
      model: "A6",
      year: 2016,
      fuelType: "Petrol",
      kilometers: 29000,
      details:
        "A nova geração do sedan Audi A6 chegou ainda mais elegante e tecnológica. O design na nova linguagem Audi e o sistema digital e sensível ao toque fazem dele o companheiro ideal para quem procura luxo e inteligência.",
      price: 150000,
      photoUrl:
        "https://res.cloudinary.com/guillermoangulo/image/upload/v1596898788/cars/audi-A6-sedan.jpg",
    },
    {
      id: 3,
      make: "Audi",
      model: "Q5",
      year: 2017,
      fuelType: "Petrol",
      kilometers: 15000,
      details:
        "A nova geração do Audi Q5 confirma seu lugar especial entre os SUVs de luxo. Ele tem o tamanho ideal: funcional para o trânsito urbano e robusto para um fim de semana na praia ou na montanha.",
      price: 13485,
      photoUrl:
        "https://res.cloudinary.com/guillermoangulo/image/upload/v1596898787/cars/audi-Q5.jpg",
    },
    {
      id: 4,
      make: "Audi",
      model: "Q8",
      year: 2019,
      fuelType: "Petrol",
      kilometers: 10000,
      details:
        "Com potência de 600 cv, o Audi RS Q8 é o mais poderoso SUV coupé da Audi Sport. Além da incomparável performance RS, o modelo surpreende por sua capacidade de constante transformação – que vai do design inovador à experiência de liberdade ao volante. Descubra todo o poder do Audi RS Q8.",
      price: 13485,
      photoUrl:
        "https://res.cloudinary.com/guillermoangulo/image/upload/v1596898787/cars/audi-Q8.jpg",
    },
    {
      id: 5,
      make: "BMW",
      model: "M5",
      year: 2013,
      fuelType: "Petrol",
      kilometers: 59000,
      details:
        "Criado para oferecer emoção e elegância. Mais potente do que nunca. A nova geração do BMW M5 é a afirmação da suprema excelência da engenharia e da condução inovadora e inteligente para o levar a uma dimensão inimaginável.",
      price: 204900,
      photoUrl:
        "https://res.cloudinary.com/guillermoangulo/image/upload/v1596900179/cars/BMW-M5.jpg",
    },
    {
      id: 6,
      make: "BMW",
      model: "330i",
      year: 2019,
      fuelType: "Petrol",
      kilometers: 2000,
      details:
        "Além do som de alta-fidelidade do BMW 330i também impressiona a quantidade de recursos disponíveis, como HD interno, carregador de celular por indução, roteador wi-fi e até CD player para quem ainda curte ouvir música à moda antiga, sem usar entrada USB com conexão Bluetooth.",
      price: 324900,
      photoUrl:
        "https://res.cloudinary.com/guillermoangulo/image/upload/v1596900179/cars/BMW-330i.jpg",
    },
    {
      id: 7,
      make: "BMW",
      model: "Z4",
      year: 2020,
      fuelType: "Petrol",
      kilometers: 25000,
      details:
        "Quando o teto se abre totalmente, eis o momento em que não existem mais limites para o seu prazer de dirigir, no novo BMW Z4. Um roadster que não poderia ser melhor: aberto, esportivo e sem compromissos.",
      price: 145500,
      photoUrl:
        "https://res.cloudinary.com/guillermoangulo/image/upload/v1596900179/cars/BMW-Z4.jpg",
    },
    {
      id: 8,
      make: "Ford",
      model: "KA",
      year: 2019,
      fuelType: "Flex",
      kilometers: 9000,
      details:
        "Você se impressiona toda vez que entra em um Ka. Toda a linha investe em design, fazendo do Ka um carro muito moderno. Além disso, com todo o conforto dos bancos e seu acabamento superior, você nem vai perceber que está no trânsito.",
      price: 48200,
      photoUrl:
        "https://res.cloudinary.com/guillermoangulo/image/upload/v1596901927/cars/ford-KA.jpg",
    },
    {
      id: 9,
      make: "Ford",
      model: "Mustang",
      year: 2018,
      fuelType: "Petrol",
      kilometers: 17000,
      details:
        "Com design exclusivo, performance em pista e um ronco sem igual, o Mustang Black Shadow vai marcar a história. Esta é uma edição especial que mantém a tradição de se adequar à forma como você dirige, até o último detalhe.",
      price: 270500,
      photoUrl:
        "https://res.cloudinary.com/guillermoangulo/image/upload/v1596901927/cars/ford-mustang.webp",
    },
    {
      id: 10,
      make: "Ford",
      model: "Ranger",
      year: 2015,
      fuelType: "Diesel",
      kilometers: 50000,
      details:
        "A Nova Ranger oferece um visual mais audacioso, novos acabamentos interiores e vem com recursos inovadores. O que não mudou é a sua variedade de versões e estilos de cabine para atender a todas as necessidades.",
      price: 63500,
      photoUrl:
        "https://res.cloudinary.com/guillermoangulo/image/upload/v1596901927/cars/ford-ranger.jpg",
    },
    {
      id: 11,
      make: "Mercedes-Benz",
      model: "Classe A",
      year: 2014,
      fuelType: "Petrol",
      kilometers: 80000,
      details:
        "Quer na hora do rush, em longas viagens noturnas ou em trajetos desconhecidos, o seu novo Classe A alivia você principalmente em situações estressantes. ",
      price: 60000,
      photoUrl:
        "https://res.cloudinary.com/guillermoangulo/image/upload/v1596906112/cars/mercedes-benz-classe-A.webp",
    },
    {
      id: 12,
      make: "Mercedes-Benz",
      model: "Classe C Cabriolet",
      year: 2017,
      fuelType: "Diesel",
      kilometers: 112000,
      details:
        "O Classe C Cabriolet vem diretamente do centro esportivo e mostra que está na melhor forma por dentro e por fora.",
      price: 185000,
      photoUrl:
        "https://res.cloudinary.com/guillermoangulo/image/upload/v1596906112/cars/mercedes-benz-classe-C-cabriolet.webp",
    },
    {
      id: 13,
      make: "Renault",
      model: "KWID",
      year: 2017,
      fuelType: "Flex",
      kilometers: 80000,
      details:
        "O Renault KWID OUTSIDER é o modelo mais alto do segmento. Tem barras de teto e outros detalhes que fazem dele um SUV compacto, valente e robusto.",
      price: 35000,
      photoUrl:
        "https://res.cloudinary.com/guillermoangulo/image/upload/v1596906534/cars/renault-kwid.webp",
    },
    {
      id: 14,
      make: "Renault",
      model: "Sandero",
      year: 2009,
      fuelType: "Flex",
      kilometers: 52000,
      details:
        "O Renault SANDERO vem com Media Evolution 7” touchscreen e tecnologias Android Auto e Apple CarPlay, para espelhamento de apps como Spotify, Waze, Google Maps e WhatsApp.",
      price: 16500,
      photoUrl:
        "https://res.cloudinary.com/guillermoangulo/image/upload/v1596906534/cars/renault-sandero.webp",
    },
    {
      id: 15,
      make: "Renault",
      model: "Captur",
      year: 2017,
      fuelType: "Flex",
      kilometers: 20000,
      details:
        "O piloto automático, item de série do Renault CAPTUR, vem com regulador e limitador de velocidade, que possibilitam uma opção de condução mais confortável e segura para todos os ocupantes do veículo.",
      price: 58500,
      photoUrl:
        "https://res.cloudinary.com/guillermoangulo/image/upload/v1596906534/cars/renault-captur.webp",
    },
    {
      id: 16,
      make: "Volkswagen",
      model: "Gol",
      year: 2014,
      fuelType: "Flex",
      kilometers: 120000,
      details:
        "O painel traz seus botões e comandos totalmente direcionados para o motorista, facilitando seu acesso a ele. O visual, mais moderno, também possui uma série de recursos tecnológicos e acabamento refinado.",
      price: 20000,
      photoUrl:
        "https://res.cloudinary.com/guillermoangulo/image/upload/v1596908945/cars/volkswagen-gol.png",
    },
    {
      id: 17,
      make: "Volkswagen",
      model: "Golf GTE",
      year: 2015,
      fuelType: "Petrol",
      kilometers: 460000,
      details:
        "Com a tecnologia híbrida plug-in, o Golf GTE combina o motor TSI com o elétrico de alto torque. De acordo com a situação, você pode ter o máximo de cada um deles, individualmente ou combinados.",
      price: 50000,
      photoUrl:
        "https://res.cloudinary.com/guillermoangulo/image/upload/v1596908945/cars/volkswagen-golf-GTE.webp",
    },
    {
      id: 18,
      make: "Volkswagen",
      model: "Polo",
      year: 2019,
      fuelType: "Flex",
      kilometers: 30000,
      details:
        "O Novo Polo é o único da categoria a conquistar nota máxima em segurança pelo Latin NCAP com cinco estrelas tanto para a proteção do ocupante adulto como para a do ocupante infantil.",
      price: 65000,
      photoUrl:
        "https://res.cloudinary.com/guillermoangulo/image/upload/v1596908945/cars/volkswagen-polo.jpg",
    },
    {
      id: 19,
      make: "Peugeot",
      model: "208",
      year: 2017,
      fuelType: "Petrol",
      kilometers: 18500,
      details:
        "Descubra a sensação de dirigir o Peugeot 208, um dos carros mais econômicos do Brasil. Equipado com o exclusivo PEUGEOT i-Cockpit®, oferece uma experiência única de condução, além do PEUGEOT Connect Radio que permite o espelhamento do Waze* e o novo câmbio automático de 6 marchas.",
      price: 39900,
      photoUrl:
        "https://res.cloudinary.com/guillermoangulo/image/upload/v1596909371/cars/peugeot-208.webp",
    },
    {
      id: 20,
      make: "Peugeot",
      model: "2008",
      year: 2016,
      fuelType: "Flex",
      kilometers: 25000,
      details:
        "A linha SUV Peugeot acaba de ir mais longe, com o lançamento no Novo SUV Peugeot 2008 turbo THP. Além do exclusivo Peugeot i-Cockpit® e a melhor experiência de condução com teto panorâmico, o lançamento vem com câmbio automático de 6 marchas, motor turbo THP Flex de 173 cv de potência e torque máximo 24,5 kgf.m (DIN), em apenas 1.400 rpm.",
      price: 49000,
      photoUrl:
        "https://res.cloudinary.com/guillermoangulo/image/upload/v1596909371/cars/peugeot-2008.webp",
    },
    {
      id: 21,
      make: "Fiat",
      model: "Mobi",
      year: 2017,
      fuelType: "Flex",
      kilometers: 32600,
      details:
        "Agora você pode dar um toque de aventura para o seu Mobi Like. O Kit Cross transforma seu Mobi em um auntêntico desbravador da vida urbana, com detalhes inconfundíveis que traduzem exclusividade para seu design único.",
      price: 25000,
      photoUrl:
        "https://res.cloudinary.com/guillermoangulo/image/upload/v1596910883/cars/fiat-mobi.jpg",
    },
    {
      id: 22,
      make: "Toyota",
      model: "Corolla",
      year: 2012,
      fuelType: "Petrol",
      kilometers: 90000,
      details:
        "A excelente dirigibilidade do novo Corolla é garantida pelos novos motores e pela plataforma TNGA. Para a versão Altis Hybrid, a tecnologia inovadora garante máxima eficiência e desempenho. ",
      price: 520500,
      photoUrl:
        "https://res.cloudinary.com/guillermoangulo/image/upload/v1596910883/cars/toyota-corolla.jpg",
    },
  ]);
}
