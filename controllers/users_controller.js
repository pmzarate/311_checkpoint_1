const {users} = require('../data/sampleUser');

exports.listUsers = function list (req,res) {
    res.json(users)
}

exports.showUser = function show (req,res) {
    let users = users.find(function(item){
        return item._id == req.params.id
    })
    res.json(users)
}


// exports.createUser = function create (req,res) {
//     let newUser = users.length - 1;
//     let previousId = newUser[newInfo]._id;
//     req.body._id = previousId + 1;
//     users.push(req.body)
//     res.json(users)
// }

// exports.updateUser = function update (req,res) {
//     let updatedUser = 
// }