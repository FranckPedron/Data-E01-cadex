const Joi = require("joi");

// je précise que je souhaite un objet qui peut avoir les propriétés name,adjective,verb et complement qui doivent être des string
const cadexSchema = Joi.object({
    name: Joi.string(),
    adjective: Joi.string(),
    verb: Joi.string(),
    complement: Joi.string(),
}).required().min(1).max(4); // je précise que je requiers un objet avec minimum 1 propriété et maximum 4 propriétés

const schema = {};

module.exports = { cadexSchema, schema }; // on utilise la décomposition pour permettre de ne récupérer qu'un schéma et pas tous forcément à chaque fois
