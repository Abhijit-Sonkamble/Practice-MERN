const { json } = require("body-parser");
const AdminService = require("../../services/Admin/admin.services");
const { errorRes, successRes } = require("../../utils/response");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const adminService = new AdminService();

module.exports.registerAdmin = async (req, res) => {
    try {

         //Jr bcrypt karayche asale tr yala nehmi register karaycha pahile thevayche
         req.body.password = await bcrypt.hash(req.body.password, 12)

        const addAdmin = await adminService.registerAdmin(req.body);

        

        if (!addAdmin) return res.status(500).json(errorRes(500, true, "Admin register failed"))

            return res.status(200).json(successRes(200, false, "Admin register success", addAdmin)) 

    } catch (error) {
        console.log("Error in register controller admin : ", error)
    }
}

module.exports.loginAdmin = async(req, res) => {
    try {
        const admin = await adminService.findSingleAdmin({email: req.body.email})
        

        const isPassword = await bcrypt.compare(req.body.password, admin.password); // ithe compare madhe compare(jithun password yetoy, encrypt password kuthun yetoy te);
        
     if (!isPassword) {
        return res.status(401).json(errorRes(401, true, "Admin Login failed"))
     }

     const payload = {
        id: admin.id,
        isAdmin : true
     }

     const token = jwt.sign(payload, "Abhijit#123")  //Logic of jwt
            
           return res.status(200).json(successRes(200, false, "Admin login SUCCESS" , {token}))
    } catch (error) {
        console.log("error in Login Admin : ", error)
    }
}