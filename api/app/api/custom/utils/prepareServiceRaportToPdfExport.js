const get = require("lodash.get");

const prepareCostsList = (costsList) => {
  return costsList.map((cost) => ({
    title: cost.title,
    quantity: cost.quantity,
    price_net: cost.price_net,
    price_gross: cost.price_gross,
    tax_rate: cost.tax_rate,
    total: cost.price_gross * cost.quantity,
  }));
};

const prepareServiceRaportToPdfExport = (raport) => {
  const cost_list = prepareCostsList(raport.service_costs.costs_list);
  const total_costs = cost_list.reduce((acc, val) => acc + val.total, 0);
  return {
    vehicle_details: {
      make: get(raport, "vehicle_details.make", "-"),
      model: get(raport, "vehicle_details.model", "-"),
      vin_number: get(raport, "vehicle_details.vin_number", "-"),
      date_of_registration:
        get(raport, "vehicle_details.date_of_registration", "-") || "-",
      registration_number:
        get(raport, "vehicle_details.registration_number", "-") || "-",
      engine_power: get(raport, "vehicle_details.engine_power", "-") || "-",
      engine_capacity:
        get(raport, "vehicle_details.engine_capacity", "-") || "-",
      production_year:
        get(raport, "vehicle_details.production_year", "-") || "-",
      mileage: {
        mileage: get(raport, "vehicle_details.model", "-") || "-",
        unit: get(raport, "vehicle_details.unit") || "",
      },
    },
    other_informations: {
      warranty_time: get(raport, "other_informations.warranty_time") || null,
      payment_method: get(raport, "other_informations.payment_method") || null,
      service_date: raport.other_informations.service_date,
    },
    service_costs: {
      currency: raport.service_costs.currency,
      costs_list: cost_list,
      total: total_costs,
    },
    service_description: raport.service_description,
    service_diagnosis: raport.service_diagnosis,
    comments: raport.comments,
    company: {
      company_name: raport.company.company_name,
      street: raport.company.street,
      postal_code: raport.company.postal_code,
      street_number: raport.company.street_number,
      city: raport.company.city,
      vat_number: raport.company.vat_number,
    },
    hasPhotos: !!raport.photos.length,
    created_at: raport.created_at,
  };
};

module.exports = {
  prepareServiceRaportToPdfExport,
};
