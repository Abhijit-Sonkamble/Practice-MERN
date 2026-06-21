import axios from "axios";

export const LoginAdmin = async(data: any) => {
    try {
        const res = await axios.post("http://localhost:8000/api/auth/admin/loginAdmin", data)
        console.log("Response ", res.data);
        
        return res.data;
    } catch (error) {
        return {
            status: error.response?.status || 500,
            message: error.response?.data?.message || "Login Failed"
        };
    }
}