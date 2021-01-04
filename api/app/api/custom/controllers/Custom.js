"use strict";

module.exports = {
  async logout(ctx) {
    ctx.cookies.set("token", null, {
      httpOnly: true,
      secure: false,
      maxAge: 1000 * 60 * 60 * 24 * 14, // 14 Day Age
      domain: process.env.CLIENT_DOMAIN || "localhost",
    });
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

    const userResponseDto = {
      id: userPayload.id,
      role: {
        type: userPayload.role.type,
      },
      provider: userPayload.provider,
      username: userPayload.username,
      email: userPayload.email,
      confirmed: userPayload.confirmed,
      blocked: userPayload.blocked,
      company: userPayload.company,
      created_at: userPayload.created_at,
      updated_at: userPayload.updated_at,
    };

    ctx.send({ user: userResponseDto });
  },
};
