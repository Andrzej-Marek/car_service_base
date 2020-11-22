"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

const uuid = require("uuid");

module.exports = {
    lifecycles: {
        // Called before an entry is created
        beforeCreate(data) {
            const randomNumber = uuid.v4();
            data.service_id = randomNumber.substring(0, 8);
        },
    },
};
