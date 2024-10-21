const { CreateUser } = require('../services/UserService');

const CreateUserController = async (req, res) => {
    try {
        // const name = req.body.name;
        // const email = req.body.email;
        // const age = req.body.age;
        // if(name == null || email == null || age == null){
        //     console.log('Missing operator');
        // };
        const response = await CreateUser(req.body);
        return res.status(201).json(response);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    CreateUserController
}
