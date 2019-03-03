const Joi = require('joi');

module.exports = Joi
  .object({
    type: Joi.string().valid("article", "video", "podcast", "talk").required(),

    title: Joi.string().required(),

    // The author can be a string or non-empty array of strings
    author: Joi.alternatives([
      Joi.string(),
      Joi.array().items(Joi.string()).min(1)
    ]).required(),

    sourceName: Joi.string().required(),

    // The source URL is requried unless it's a live talk
    sourceURL: Joi.when("live", {
      is: Joi.not(true),
      then: Joi.string().uri().required()
    }),

    // Live is required for all talks
    live: Joi.when("type", {
      is: "talk",
      then: Joi.boolean().required()
    })
  })
  .unknown();
