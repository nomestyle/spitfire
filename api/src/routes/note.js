import {getCustomerNotes, postCustomerNote, putCustomerNote, deleteCustomerNote} from "../controllers";

const express = require('express')
const router = express.Router()

/**
 * @openapi
 * /note/customer/:identifier:
 *  get:
 *     description: get all the notes for a customer
 *     parameters:
 *       - in: path
 *         name: identifier
 *         required: true
 *         description: identifier string of customer.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Returns an array of notes.
 *         content:
 *          application/json:
 *              schema:
 *                  $ref: '#/components/schemas/Notes'
 *       500:
 *          description: Unexpected Error
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Error'
 */
router.get('/customer/:identifier', getCustomerNotes);

/**
 * @openapi
 * /note/addto/:identifier:
 *  post:
 *     description: add Note to customer identify
 *     parameters:
 *       - in: path
 *         name: identifier
 *         required: true
 *         description: identifier string of customer.
 *         schema:
 *           type: string
 *       - in:
 *         name: body
 *         required: true
 *         description: note Content.
 *         schema:
 *           $ref: '#/components/schemas/NoteContent'
 *     responses:
 *       200:
 *         description: Returns [1] if successful, [0] if no record found.
 *         content:
 *          application/json:
 *              schema:
 *                  $ref: '#/components/schemas/Success'
 *       500:
 *          description: Unexpected Error
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Error'
 */
router.post('/addto/:identifier', postCustomerNote);

/**
 * @openapi
 * /note/edit/:id:
 *   put:
 *      description: edit Note content
 *      parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id of note to edit.
 *         schema:
 *           type: integer
 *           format: int32
 *       - in:
 *         name: body
 *         required: true
 *         description: note Content.
 *         schema:
 *           $ref: '#/components/schemas/NoteContent'
 *      responses:
 *       200:
 *         description: Returns [1] if successful, [0] if no record found.
 *         content:
 *          application/json:
 *              schema:
 *                  $ref: '#/components/schemas/Success'
 *      500:
 *          description: Unexpected Error
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Error'
*/
router.put('/edit/:id', putCustomerNote);

/**
 * @openapi
 * /note/delete/:id:
 *   delete:
 *     description: delete Note
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id of note to delete.
 *         schema:
 *           type: integer
 *           format: int32
 *     responses:
 *       200:
 *         description: Returns [1] if successful, [0] if no record found.
 *         content:
 *          application/json:
 *              schema:
 *                  $ref: '#/components/schemas/Success'
 *       500:
 *          description: Unexpected Error
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Error'
 */
router.delete('/delete/:id', deleteCustomerNote);

module.exports = router;
