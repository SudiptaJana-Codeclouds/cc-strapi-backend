"use strict";

/**
 * A set of functions called "actions" for `contact-form`
 */

module.exports = {
  sendEmail: async (ctx, next) => {
    try {

      const entry = await strapi.service("api::contact.contact").create({
        data: {
          ...ctx.request.body
        },
      });

      return entry;
    } catch (err) {
      ctx.body = err;
    }
  },
};
