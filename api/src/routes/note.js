import {getCustomerNotes, postCustomerNote, putCustomerNote, deleteCustomerNote} from "../controllers";

const express = require('express')
const router = express.Router()

/**
 * @openapi
 *   /note/customer/:identifier:
 *   get:
 *     description: get all the notes for a customer
 *     parameters:
 *          identifier:
 *              in: path
 *              required: true
 *              schema:
 *                  type: string
 *     responses:
 *       200:
 *         description: Returns an array of notes.
 */
router.get('/customer/:identifier', getCustomerNotes);

/**
 * @openapi
 * /note/addto/:identifier:
 *   post:
 *     description: add Note to customer identify
 *     responses:
 *       200:
 *         description: Returns success.
 */
router.post('/addto/:identifier', postCustomerNote);

/**
* @openapi
* /note/edit/:id:
    *   post:
    *     description: edit Note content
*     responses:
*       200:
*         description: Returns success.
*/
router.put('/edit/:id', putCustomerNote);

/**
 * @openapi
 * /note/delete/:id:
 *   post:
 *     description: edit Note content
 *     responses:
 *       200:
 *         description: Returns success.
 */
router.delete('/delete/:id', deleteCustomerNote);

module.exports = router;
