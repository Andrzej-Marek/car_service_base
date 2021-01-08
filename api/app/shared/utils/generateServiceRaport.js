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
} = require("../utils/prepareServiceRaportToPdfExport");
const { format } = require("date-fns");

export const generateServiceRaport = (raportNumber ) => {
    const printer = new PdfPrinter(fonts);
    const fileLocation = path.resolve(
      __dirname,
      `../../../public/pdfs/${raportNumber}.pdf`
    );

    // UNCOMMENT IF WE WANT TO CHECK IF FILE ALREADY IS CREATED
    // const isAlreadyExistFile = fs.existsSync(fileLocation);

    // if (isAlreadyExistFile) {
    //   // ctx.attachment(`${raportNumber}.pdf`);
    //   const alreadyExistedFile = fs.createReadStream(fileLocation);
    //   ctx.type = "application/pdf";
    //   return ctx.send(alreadyExistedFile);
    // }

    const entity = await strapi.services.service.findOne({
      service_id: raportNumber,
    });

    if (!entity) {
      return ctx.badRequest(
        null,
        formatError({
          id: "service.notfound",
          message: "Service id does not found",
        })
      );
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
              preparedService.other_informations.payment_method,
              true
            ),
            ...generateKeyValue(
              "Gwarancja do",
              preparedService.other_informations.warranty_time,
              true
            ),
          ],
        },
        ...generateSubHeaderWithContent(
          "Uwagi",
          preparedService.comments,
          true
        ),
      ],
      styles,
    };

    const pdfDoc = printer.createPdfKitDocument(docDefinition);
    pdfDoc.pipe(fs.createWriteStream(fileLocation));
    pdfDoc.end();

    // ctx.attachment(`${raportNumber}.pdf`);
    // ctx.type = "application/pdf";
    // const stream = fs.createReadStream(fileLocation);


    return `/pdfs/${raportNumber}.pdf`
}