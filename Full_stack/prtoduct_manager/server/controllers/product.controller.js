const Product = require('../models/product.model')
module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => res.json( allProducts))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
// module.exports.findOneSingleUser = (req, res) => {
//     User.findOne({ _id: req.params.id })
//         .then(oneSingleUser => res.json({ user: oneSingleUser }))
//         .catch(err => res.json({ message: 'Something went wrong', error: err }));
// }
 
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
        .then(updatedUser => res.json({ user: updatedUser }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.deleteAnExistingProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}