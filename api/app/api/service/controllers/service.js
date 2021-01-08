"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const { sanitizeEntity } = require("strapi-utils");
const {
  generateServiceRaport,
} = require("../../../shared/utils/generateServiceRaport");

module.exports = {
  async findOne(ctx) {
    const entity = await strapi.services.service.findOne({
      service_id: ctx.params.id,
    });
    return sanitizeEntity(entity, { model: strapi.models.service });
  },

  async create(ctx) {
    let entity;
    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.service.create(data, { files });
    } else {
      entity = await strapi.services.service.create({
        ...ctx.request.body,
        company: ctx.state.user.company,
      });
    }
    await generateServiceRaport(entity.service_id);
    return sanitizeEntity(entity, { model: strapi.models.service });
  },

  async find(ctx) {
    const results = await strapi
      .query("service")
      .find({ company: ctx.state.user.company });

    return results.map((entity) =>
      sanitizeEntity(entity, { model: strapi.models.service })
    );
  },

  async update(ctx) {
    const { id } = ctx.params;

    let entity;
    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.service.update({ id }, data, {
        files,
      });
    } else {
      entity = await strapi.services.service.update({ id }, ctx.request.body);
    }
    await generateServiceRaport(entity.service_id);
    return sanitizeEntity(entity, { model: strapi.models.service });
  },
};
