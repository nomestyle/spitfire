import {
    getCustomerById,
    getCustomerByIdentifier,
    getCustomers, getCustomersFiltered,
    getCustomersFilteredByStatus,
    getCustomersSort, putCustomerStatus
} from "../controllers";

const express = require('express')
const router = express.Router()

/**
 * @openapi
 *  /customer:
 *   get:
 *     description: return all customers
 *     responses:
 *       200:
 *         description: customer objects array
 *         content:
 *          application/json:
 *              schema:
 *                  $ref: '#/components/schemas/Customers'
 *       500:
 *          description: Unexpected Error
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Error'
 *
 */
router.get('/', getCustomers);

/**
 * @openapi
 * /customer/Id/:id:
 *   get:
 *     description: return customer by using id
 *      parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id of customer.
 *         schema:
 *           type: integer
 *           format: int32
 *     responses:
 *       200:
 *         description: customer object
 *         content:
 *          application/json:
 *              schema:
 *                  $ref: '#/components/schemas/Customer'
 *       500:
 *          description: Unexpected Error
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Error'
 *
 */
router.get('/Id/:id', getCustomerById);

/**
 * @openapi
 * /customer/Identifier/:identifier:
 *   get:
 *     description: return customer by using identifier
 *      parameters:
 *       - in: path
 *         name: identifier
 *         required: true
 *         description: identifier of customer.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: customer object
 *         content:
 *          application/json:
 *              schema:
 *                  $ref: '#/components/schemas/Customer'
 *       500:
 *          description: Unexpected Error
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Error'
 *
 */
router.get('/Identifier/:identifier', getCustomerByIdentifier);

/**
 * @openapi
 * /customer/sort/:direction/by/:property:
 *   get:
 *     description: sort all customers based on direction('ASC' or 'DESC') of a property
 *     parameters:
 *       - in: path
 *         name: direction
 *         required: true
 *         description: sorting direction (either 'ASC' or 'DESC').
 *         schema:
 *           type: string
 *       - in: path
 *         name: property
 *         required: true
 *         description: field name.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: customer objects array
 *         content:
 *          application/json:
 *              schema:
 *                  $ref: '#/components/schemas/Customers'
 *       500:
 *          description: Unexpected Error
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Error'
 *
 */
router.get('/sort/:direction/by/:property', getCustomersSort);

/**
 * @openapi
 * /customer/sort/:direction/by/:property/status/:stat:
 *   get:
 *     description: returns all customers based on status
 *     parameters:
 *       - in: path
 *         name: direction
 *         required: true
 *         description: sorting direction (either 'ASC' or 'DESC').
 *         schema:
 *           type: string
 *       - in: path
 *         name: property
 *         required: true
 *         description: field name.
 *         schema:
 *           type: string
 *       - in: path
 *         name: stat
 *         required: true
 *         description: status name.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: customer objects array
 *         content:
 *          application/json:
 *              schema:
 *                  $ref: '#/components/schemas/Customers'
 *       500:
 *          description: Unexpected Error
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Error'
 *
 */
router.get('/sort/:direction/by/:property/status/:stat', getCustomersFilteredByStatus);

/**
 * @openapi
 * /customer/sort/:direction/by/:property/filter/:filter/:value:
 *   get:
 *     description: returns all customers based on filter values
 *     parameters:
 *       - in: path
 *         name: direction
 *         required: true
 *         description: sorting direction (either 'ASC' or 'DESC').
 *         schema:
 *           type: string
 *       - in: path
 *         name: property
 *         required: true
 *         description: field name.
 *         schema:
 *           type: string
 *       - in: path
 *         name: filter
 *         required: true
 *         description: filtering field name.
 *         schema:
 *           type: string
 *       - in: path
 *         name: value
 *         required: true
 *         description: filtering field value.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: customer objects array
 *         content:
 *          application/json:
 *              schema:
 *                  $ref: '#/components/schemas/Customers'
 *       500:
 *          description: Unexpected Error
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Error'
 *
 */
router.get('/sort/:direction/by/:property/filter/:filter/:value', getCustomersFiltered);

/**
 * @openapi
 * /customer/:identifier/updatestatus/:status:
 *  put:
 *      description: update status
 *      parameters:
 *       - in: path
 *         name: identifier
 *         required: true
 *         description: identifier of customer.
 *         schema:
 *           type: string
 *       - in: path
 *         name: status
 *         required: true
 *         description: status name.
 *         schema:
 *           type: string
 *      responses:
 *          200:
 *              description: Returns [1] if successful, [0] if no record found.
 *              content:
 *                  application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Success'
 *          500:
 *              description: Unexpected Error
 *              content:
 *                  application/json:
 *                      schema:
 *                      $ref: '#/components/schemas/Error'
 *
 */
router.put('/:identifier/updatestatus/:status', putCustomerStatus);

module.exports = router;
