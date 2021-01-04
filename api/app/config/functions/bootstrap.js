"use strict";

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/v3.x/concepts/configurations.html#bootstrap
 */

const enforceHttps = require("koa-sslify");

module.exports = (cb) => {
  // Force HTTPS on all page
  strapi.app.use(
    enforceHttps({
      trustProtoHeader: true,
    })
  );

  cb();
};
