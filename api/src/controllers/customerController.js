import * as database from '../database';

const Customer = database.models.Customer;
const Status = database.models.Status;

//Get All Customers
export const getCustomers = (req, res) => {
        Customer.findAll({
            attributes: ['id', 'identifier', 'firstName', 'lastName', 'phoneNum', 'emailAdd', 'createdAt', 'updatedAt'],
            include:
                [{
                    model: Status,
                    attributes: ['statusName'],
                }]
        }).then( Result =>{
            console.log(Result);
            res.status(200).json(Result)
        }).catch(error=>{
            res.status(500).send(error);
        });
}

//Get Customer by Database Id
export const getCustomerById = (req, res) => {
        Customer.findOne({
            attributes: ['id','identifier','firstName','lastName','phoneNum','emailAdd','createdAt','updatedAt'],
                where: {id: req.params.id},
            include:
            [{
                model: Status,
                attributes: ['statusName'],
            }]
        }).then( Result =>{
            console.log(Result);
            res.status(200).json(Result)
        }).catch(error=>{
            res.status(500).send(error);
        });
}

//Get Customer by Company Identifier
export const getCustomerByIdentifier = (req, res) => {
        Customer.findOne({
            attributes: ['id','identifier','firstName','lastName','phoneNum','emailAdd','createdAt','updatedAt'],
            where: {identifier: req.params.identifier},
            include:
                [{
                    model: Status,
                    attributes: ['statusName'],
                }]
        }).then( Result =>{
            console.log(Result);
            res.status(200).json(Result)
        }).catch(error=>{
            res.status(500).send(error);
        });;
}

//Get All Customers Sorted
export const getCustomersSort = (req, res) => {
        Customer.findAll({
            attributes: ['id','identifier','firstName','lastName','phoneNum','emailAdd','createdAt','updatedAt'],
            include:
                [{
                    model: Status,
                    attributes: ['statusName'],
                }],
            order: [
                [req.params.property, req.params.direction]
            ]
        }).then( Result =>{
            console.log(Result);
            res.status(200).json(Result)
        }).catch(error=>{
            res.status(500).send(error);
        });
}

//Get All Customers FilteredBy Status
export const getCustomersFilteredByStatus = (req, res) => {
        Customer.findAll({
            attributes: ['id','identifier','firstName','lastName','phoneNum','emailAdd','createdAt','updatedAt'],
            include:
                [{
                    model: Status,
                    where: {statusName: req.params.stat},
                    attributes: ['statusName'],
                }],
            order: [
                [req.params.property, req.params.direction]
            ]
        }).then( Result =>{
            console.log(Result);
            res.status(200).json(Result)
        }).catch(error=>{
            res.status(500).send(error);
        });
}

//Get All Customers Filtered
export const getCustomersFiltered = (req, res) => {
        let whereClause = {};
        whereClause[req.params.filter] = req.params.value;
        Customer.findAll({
            attributes: ['id','identifier','firstName','lastName','phoneNum','emailAdd','createdAt','updatedAt'],
            where: whereClause,
            include:
                [{
                    model: Status,
                    attributes: ['statusName'],
                }],
            order: [
                [req.params.property, req.params.direction]
            ]
        }).then( Result =>{
            console.log(Result);
            res.status(200).json(Result)
        }).catch(error=>{
            res.status(500).send(error);
        });
}

//Update Customer Status
export const putCustomerStatus = (req, res) => {
        Status.findOne({
            attributes: ['id'],
            where: {statusName: req.params.status},
        }).then( status =>{
            console.log(status.id);
            console.log(req.params.identifier);
            Customer.update({statusId: status.id},{
                where: {identifier: req.params.identifier}
            }).then( Result =>{
                console.log(Result);
                res.status(200).json(Result)
            }).catch(error=>{
                res.status(500).send(error);
            });
        });
}
