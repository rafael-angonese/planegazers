/**
 * Dados institucionais da empresa.
 * Fonte única de verdade para nome, razão social, CNPJ, endereço e contatos.
 *
 * Estes dados são usados na página /about e no JSON-LD de Organization.
 * Devem bater exatamente com o cadastro da Receita Federal e com o que for
 * informado à Dun & Bradstreet (D-U-N-S) — divergência trava a verificação.
 */
export const company = {
  name: "Planegazers",
  legalName: "Planegazers Desenvolvimento de Software LTDA",
  cnpj: "37.645.347/0001-00",
  email: "contato@planegazers.com",
  /** E-mail constante no cadastro da Receita Federal. */
  registeredEmail: "planegazers@gmail.com",
  /** Telefone comercial. Deve ser atendível: é por ele que a verificação liga. */
  phone: "+55 (49) 99836-8356",
  /** Formato E.164, usado no href do link tel: e no JSON-LD. */
  phoneE164: "+5549998368356",
  tagline: "Criando mundos com letras e números.",
  foundedAt: "2020-07-07",
  address: {
    street: "Avenida Porto Alegre D, 427 D",
    complement: "Edif. Lazio Executivo, Sala 708, Quadra 22, Lote 107",
    district: "Centro",
    city: "Chapecó",
    state: "SC",
    stateName: "Santa Catarina",
    postalCode: "89802-130",
    country: "BR",
    countryName: "Brasil",
  },
};

export const fullAddress = [
  `${company.address.street} — ${company.address.complement}`,
  `${company.address.district}, ${company.address.city} — ${company.address.state}`,
  `CEP ${company.address.postalCode}, ${company.address.countryName}`,
];
