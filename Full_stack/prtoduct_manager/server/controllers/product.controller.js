const Product = require('../models/product.model')
module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => res.json( allProducts))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.findOneSingleProduct = (req, res) => {
    // console.log(req.params.id);
    Product.findOne({ _id: req.params.id })
        .then(oneSingleProduct => res.json( oneSingleProduct))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
        .then(newlyCreatedUser => res.json( newlyCreatedUser))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.updateExistingProduct = (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedProduct => res.json({ updatedProduct }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.deleteAnExistingProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}