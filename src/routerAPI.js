const express = require("express");
const controller = require("../app/controller/controller");
const { cadexSchema } = require("../app/validation/schemas");
const { validateBody, validateQuery } = require("../app/validation/validate");

const router = express.Router();

/**
* @api {get} /v1/cadex Request a Cadex
* @apiVersion 1.0.0
* @apiName GetCadex
* @apiGroup Cadex
* @apiSuccess {Object} Cadex retourne un cadex
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*       "noun": "Michel",
*       "adjective": "trop vnr",
*       "verb": "essai",
*       "complement": "d'utiliser apidoc"
*     }
* @apiError Cadex not found
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "CadexNotFound"
*     }
*/
router.get("/", validateQuery(cadexSchema), controller.getCadex);

/**
* @api {get} /v1/cadex Request a Cadex
* @apiVersion 0.9.0
* @apiName GetCadex
* @apiGroup Cadex
* @apiSuccess {Object} Cadex retourne un cadex
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*       "noun": "Michel",
*       "adjective": "trop vnr",
*       "verb": "essai",
*       "complement": "d'utiliser apidoc"
*     }
* @apiError Cadex not found
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "CadexNotFound"
*     }
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
