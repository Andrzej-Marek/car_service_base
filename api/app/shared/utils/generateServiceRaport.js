"use strict";
var PdfPrinter = require("pdfmake");
var fs = require("fs");
var path = require("path");
const {
  generateKeyValue,
  generateSubHeaderWithContent,
  generateSubHeader,
  generatePhotosContent,
  generateCostTable,
} = require("../../api/custom/utils/pdfMethods");
const {
  prepareServiceRaportToPdfExport,
} = require("../../api/custom/utils/prepareServiceRaportToPdfExport");
const { format } = require("date-fns");

const mapPaymentMethod = (paymentMethod) => {
  const config = {
    CASH: "Gotówka",
    CREADIT_CARD: "Karta kredytowa",
    PAYMENT_CARD: "Karta płatnicza",
    BANK_TRANSFER: "Przelew bankowy",
    OTHER: "Inne",
  };

  return config[paymentMethod] || "-";
};

const fontPath = (fontType) =>
  path.join(__dirname, "..", `/fonts/${fontType}.ttf`);

const fonts = {
  Roboto: {
    normal: fontPath("Roboto-Regular"),
    bold: fontPath("Roboto-Bold"),
    italics: fontPath("Roboto-Italic"),
    bolditalics: fontPath("Roboto-BoldItalic"),
  },
};

const styles = {
  header: {
    fontSize: 22,
    bold: true,
    margin: [0, 0, 0, 20],
  },
  subheader: {
    fontSize: 15,
    bold: true,
    margin: [0, 20, 0, 10],
  },
  quote: {
    italics: true,
  },
  small: {
    fontSize: 8,
  },

  listValue: {
    bold: true,
    lineHeight: 1.5,
  },
  table: {},
  tableHeader: {
    bold: true,
    margin: [0, 5, 0, 5],
  },
  tableSummary: {
    margin: [0, 5, 0, 5],
    fontSize: 14,
    alignment: "right",
  },
};

const formatDate = (date) => {
  if (!date) {
    return;
  }
  return format(new Date(date), "dd/MM/yyyy");
};

const generateServiceRaport = async (raportNumber) => {
  const printer = new PdfPrinter(fonts);
  const fileLocation = path.resolve(
    __dirname,
    `../../public/pdfs/${raportNumber}.pdf`
  );

  const entity = await strapi.services.service.findOne({
    service_id: raportNumber,
  });

  if (!entity) {
    throw Error("Not found entity");
  }

  const preparedService = prepareServiceRaportToPdfExport(entity);
  const docDefinition = {
    footer: (currentPage, pageCount) => {
      return [
        {
          text: [
            "raportserwisowy.pl - Baza raportów serwisowych. ",
            {
              text: `Strona: ${currentPage.toString() + " / " + pageCount}`,
              style: { bold: true, italics: false },
            },
          ],
          alignment: "center",
          style: { italics: true, fontSize: 8 },
        },
      ];
    },
    info: {
      title: "Raport serwisu raportserwisowy.pl",
      author: "raportserwisowy.pl",
      subject: "Wszystkie prawa chronione!",
      keywords: "raportserwisowy raportserwisowy.pl raport serwisowy EXELO",
    },
    watermark: {
      text: "raportserwisowy.pl",
      color: "blue",
      opacity: 0.1,
    },
    content: [
      {
        text: "Raport Serwisowy",
        style: "header",
        alignment: "center",
      },
      {
        columns: [
          {
            width: 200,
            stack: [
              {
                text: [...generateKeyValue("Numer raportu", raportNumber)],
              },
              {
                text: [
                  ...generateKeyValue(
                    "Data",
                    formatDate(
                      preparedService.other_informations.service_date ||
                        preparedService.created_at
                    )
                  ),
                ],
              },
              {
                qr: `https://raportserwisowy.pl/${raportNumber}/?qrCode=true`,
                fit: 60,
              },
            ],
          },
          {
            stack: [
              {
                text: preparedService.company.company_name,
                style: { bold: true },
              },
              `ul. ${preparedService.company.street} ${preparedService.company.street_number}`,
              `${preparedService.company.postal_code} ${preparedService.company.city}`,
              // "tel: +48 794 965 465",
            ],
            width: 300,
            alignment: "right",
          },
        ],
      },
      ...generateSubHeader("Dane pojazdu"),
      {
        columns: [
          ...generateKeyValue("Marka", preparedService.vehicle_details.make),
          ...generateKeyValue("Model", preparedService.vehicle_details.model),
        ],
      },
      {
        columns: [
          ...generateKeyValue(
            "Rok produkcji",
            preparedService.vehicle_details.production_year
          ),
          ...generateKeyValue(
            "Numer VIN",
            preparedService.vehicle_details.vin_number.toUpperCase()
          ),
        ],
      },
      {
        columns: [
          ...generateKeyValue(
            "Pojemność",
            preparedService.vehicle_details.engine_capacity
          ),
          ...generateKeyValue(
            "Moc",
            preparedService.vehicle_details.engine_power
          ),
        ],
      },
      {
        columns: [
          ...generateKeyValue(
            "Rejestracja",
            preparedService.vehicle_details.registration_number
          ),
          ...generateKeyValue(
            "Przebieg",
            `${preparedService.vehicle_details.mileage.mileage} ${preparedService.vehicle_details.mileage.unit}`
          ),
        ],
      },
      ...generateSubHeaderWithContent(
        "Diagonoza serwisowa",
        preparedService.service_diagnosis
      ),
      ...generateSubHeaderWithContent(
        "Opis serwisu",
        preparedService.service_description
      ),
      ...generateCostTable("Kosztorys", preparedService.service_costs),
      {
        text: [
          "Razem: ",
          {
            text: `${preparedService.service_costs.total} ${preparedService.service_costs.currency}`,
            style: { bold: true },
          },
        ],
        style: "tableSummary",
      },
      ...generatePhotosContent(
        "Zdjęcia serwisowe",
        preparedService.hasPhotos,
        raportNumber
      ),
      ...generateSubHeader(
        "Inne informacje",
        preparedService.service_diagnosis ||
          preparedService.other_informations.warranty_time,
        true
      ),
      {
        columns: [
          ...generateKeyValue(
            "Płatność",
            mapPaymentMethod(preparedService.other_informations.payment_method),
            true
          ),
          ...generateKeyValue(
            "Gwarancja do",
            preparedService.other_informations.warranty_time,
            true
          ),
        ],
      },
      ...generateSubHeaderWithContent("Uwagi", preparedService.comments, true),
    ],
    styles,
  };

  const pdfDoc = printer.createPdfKitDocument(docDefinition);
  pdfDoc.pipe(fs.createWriteStream(fileLocation));
  pdfDoc.end();

  // ctx.attachment(`${raportNumber}.pdf`);
  // ctx.type = "application/pdf";
  // const stream = fs.createReadStream(fileLocation);
  const pdfLink = `/pdfs/${raportNumber}.pdf`;
  await strapi.services.service.update(
    { service_id: raportNumber },
    { pdf_link: pdfLink }
  );

  return pdfLink;
};

module.exports = {
  generateServiceRaport,
};
