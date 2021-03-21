import * as database from '../database';

const Customer = database.models.Customer;
const Note = database.models.Note;

//Get Customer Notes
export const getCustomerNotes = (req, res) => {
    Customer.findOne({
        attributes: ['id'],
        where: {identifier: req.params.identifier},
    }).then(customer => {
        Note.findAll({
            where: {customerId: customer.id}
        }).then(Result => {
            console.log(Result);
            res.status(200).json(Result)
        }).catch(error => {
            res.status(500).send(error);
        });
    }).catch(error => {
        res.status(500).send(error);
    });
}

//Post Customer Note
export const postCustomerNote = (req, res) => {
        Customer.findOne({
            attributes: ['id'],
            where: {identifier: req.params.identifier},
        }).then( customer =>{
            Note.create({
                customerId: customer.id,
                noteContent: req.body.noteContent,
            }).then( Result =>{
                console.log(Result);
                res.status(200).json(Result)
            }).catch(error=>{
                res.status(500).send(error);
            })
        }).catch(error=>{
            res.status(500).send(error);
        });
}

//Put Customer Note
export const putCustomerNote = (req, res) => {
    Note.update({noteContent: req.body.noteContent},{
        where: {id: req.params.id}
    }).then( Result =>{
        console.log(Result);
        res.status(200).json(Result)
    }).catch(error=>{
        res.status(500).send(error);
    });
}

//Delete Customer Note
export const deleteCustomerNote = (req, res) => {
    Note.destroy({
        where: {id: req.params.id}
    }).then( Result =>{
        console.log(Result);
        res.status(200).json(Result)
    }).catch(error=>{
        res.status(500).send(error);
    });
}
