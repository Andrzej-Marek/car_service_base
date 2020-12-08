"use strict";

module.exports = {
  async logout(ctx) {
    ctx.cookies.set("token", null);
    ctx.send({
      authorized: true,
      message: "Successfully destroyed session",
    });
  },

  async me(ctx) {
    if (
      ctx.request &&
      ctx.request.header &&
      !ctx.request.header.authorization
    ) {
      const token = ctx.cookies.get("token");
      if (token) {
        ctx.request.header.authorization = "Bearer " + token;
      }
    }

    const user = await strapi.plugins[
      "users-permissions"
    ].services.jwt.getToken(ctx);

    console.log("user", user);

    if (!user) {
      return ctx.badRequest(null, [
        { messages: [{ id: "No authorization header was found" }] },
      ]);
    }

    const userPayload = await strapi
      .query("user", "users-permissions")
      .findOne({
        id: user.id,
      });

    ctx.send({ user: userPayload });
  },
};
