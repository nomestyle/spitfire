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
