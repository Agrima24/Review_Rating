const joi = require("joi");
const Joi = require("joi").extend(require("@joi/date"));

const schema = {
  addCompany: joi
    .object({
      compName: joi.string().max(30).required(),
      location: joi.string().max(20).required(),
      city: joi.string().max(20).required(),
      foundedOn: Joi.date().format("YYYY/MM/DD").required(),
      userId: joi.string().required(),
    })
    .unknown(true),
};

module.exports = schema;
