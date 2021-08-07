const auther = require('../models/Auther.model');
 
module.exports.findAllAuthers = (req, res) => {
   Auther.find()
        .then(allDaAuthers => res.json({ Authers: allDaAuthers }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.findOneSingleAuthers = (req, res) => {
   Auther.findOne({ _id: req.params.id })
        .then(oneSingleAuther => res.json({ Auther: oneSingleAuther }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.createNewAuther = (req, res) => {
   Auther.create(req.body)
        .then(newlyCreatedAuther => res.json({ Auther: newlyCreatedAuther }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.updateExistingAuther = (req, res) => {
   Auther.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedAuther => res.json({ Auther: updatedAuther }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.deleteAnExistingAuther = (req, res) => {
   Auther.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}