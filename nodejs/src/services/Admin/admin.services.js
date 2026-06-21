const adminModel = require("../../model/admin.model");

module.exports = class AdminService {
    async registerAdmin (body) {
        try {
           return await adminModel.create(body)
        } catch (error) {
            console.log("Error in admin register service : ", error)
        }
    }

    async findSingleAdmin (body) {
        try {
            return await adminModel.findOne(body)
        } catch (error) {
            console.log("Error in findSingleAdmin service : ", error)
        }
    }
}