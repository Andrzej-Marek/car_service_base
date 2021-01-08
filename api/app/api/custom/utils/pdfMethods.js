const generateKeyValue = (key, value, missWhenEmpty = false) => {
  if (missWhenEmpty && (!value || value === "")) {
    return [];
  }

  return [
    {
      text: `${key}: `,
      width: 80,
    },
    {
      text: value,
      style: "listValue",
    },
  ];
};

const generateSubHeaderWithContent = (
  headerText,
  content,
  missWhenEmpty = false
) => {
  if (missWhenEmpty && (!content || content === "")) {
    return [];
  }

  return [
    {
      text: headerText,
      style: "subheader",
    },
    {
      text: content,
    },
  ];
};

const generateSubHeader = (headerText, missWhenEmpty = false) => {
  if (missWhenEmpty && (!headerText || headerText === "")) {
    return [];
  }
  return [
    {
      text: headerText,
      style: "subheader",
    },
  ];
};

const generatePhotosContent = (headerText, content, raportNumber) => {
  if (!content) {
    return [];
  }
  return [
    {
      text: headerText,
      style: "subheader",
    },
    {
      text: [
        "Zdjęcia serwisowe dostępne pod adresem ",
        {
          text: `https://raportserwisowy/${raportNumber}`,
          link: `https://raportserwisowy/${raportNumber}`,
          style: { bold: true },
        },
      ],
    },
  ];
};

const generateCostListRows = (costs_list) => {
  const generatedCostList = [
    [
      {
        text: "Lp.",
        style: "tableHeader",
      },
      {
        text: "Nazwa",
        style: "tableHeader",
      },
      {
        text: "Ilość",
        style: "tableHeader",
      },
      {
        text: "Cena netto",
        style: "tableHeader",
      },
      {
        text: "VAT",
        style: "tableHeader",
      },
      {
        text: "Cena brutto",
        style: "tableHeader",
      },
      {
        text: "Razem",
        style: "tableHeader",
      },
    ],
  ];
  costs_list.map((cost, index) =>
    generatedCostList.push([
      index + 1,
      cost.title,
      cost.quantity,
      cost.price_net,
      cost.tax_rate + "%",
      cost.price_gross,
      cost.total,
    ])
  );

  return generatedCostList;
};
const generateCostTable = (headerText, service_costs) => {
  const haveCostList = service_costs.costs_list.length > 0;

  if (!haveCostList) {
    return [];
  }

  return [
    {
      text: headerText,
      style: "subheader",
    },
    {
      style: "table",
      table: {
        widths: [20, "*", 40, 60, 45, 65, 60],
        body: generateCostListRows(service_costs.costs_list),
      },
    },
  ];
};

module.exports = {
  generateKeyValue,
  generateSubHeaderWithContent,
  generateSubHeader,
  generatePhotosContent,
  generateCostTable,
};
