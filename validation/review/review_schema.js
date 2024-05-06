const joi = require("joi");

const schema = {
  addReview: joi
    .object({
      subject: joi.string().max(20).required(),
      review: joi.string().max(30).required(),
      rating: joi.number().max(5).required(),
      company_id: joi.string().max(30).required(),
      user_id: joi.string().required(),
    })
    .unknown(true),
};

module.exports = schema;
