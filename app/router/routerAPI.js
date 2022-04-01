const express = require("express");
const controller = require("../controller/controller");
const { cadexSchema } = require("../validation/schemas");
const { validateBody, validateQuery } = require("../validation/validate");

const router = express.Router();

/**
 * Génère un cadex
 * @route GET /v1/cadex
 * @group CADEX
 * @return {Object} 200 - Cadex
 * @return {Error}
 */
router.get("/", validateQuery(cadexSchema), controller.getCadex);
/**
 * Insère un cadex en BDD
 * @route POST /v1/cadex
 * @group CADEX
 * @return {Object} 200 - Cadex
 * @return {Error}
 */
router.post("/", validateBody(cadexSchema), controller.postCadex);

module.exports = router;
