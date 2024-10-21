const UserModel = require('../models/User');
const users = require('../models/User')


const CreateUser = (data) => new Promise( async(resolve, reject) => {
    try {
        const response = new users(data);
        await response.save();
        resolve({
            err: response ? 0 : 1,
            mes: response ? 'Created' : 'False',
        })
        return response;
    } catch (error) {
        reject(error);
    }
})

module.exports = {
    CreateUser
}