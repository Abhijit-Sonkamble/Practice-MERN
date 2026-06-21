import { useState } from "react";
import { LoginAdmin } from "../Services/services";

export default function LoginPage() {
    // --- MODEL ---
    const [login, setLogin] = useState({
        email: "",
        password: ""
    });


    

const onFormSubmit = async (event :any) => {
    event.preventDefault();

    try {

      console.log("Login Data:", login);

      const data = await LoginAdmin(login);

      if (data.status === 200) {
        alert(data.message);
        return false;
      }
      alert(data.message);
    } catch (error) {
      console.log(error);
    } 
  };

    // --- VIEW ---
    return (
        <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
            <form 
                onSubmit={onFormSubmit} 
                style={{ 
                    maxWidth: "300px", 
                    padding: "20px", 
                    border: "1px solid #ccc", 
                    borderRadius: "5px", 
                    backgroundColor: "#f9f9f9" 
                }}
            >
                <h3 style={{ marginTop: "0", color: "#333" }}>Login</h3>

                <div style={{ marginBottom: "10px" }}>
                    <label style={{ display: "block", marginBottom: "5px", color: "#444" }}>
                        Email
                    </label>
                    <input 
                        type="email" 
                        name="email"
                        value={login.email} 
                        onChange={(e)=>(setLogin((prev)=>({...prev, email: e.target.value})))}
                        required
                        style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
                    />
                </div>

                <div style={{ marginBottom: "15px" }}>
                    <label style={{ display: "block", marginBottom: "5px", color: "#444" }}>
                        Password
                    </label>
                    <input 
                        type="password" 
                        name="password"
                        value={login.password} 
                        onChange={(e)=>(setLogin((prev)=>({...prev, password: e.target.value})))}
                        required
                        style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
                    />
                </div>

                <button 
                    type="submit" 
                    style={{ 
                        width: "100%", 
                        padding: "10px", 
                        backgroundColor: "#007BFF", 
                        color: "white", 
                        border: "none", 
                        borderRadius: "3px", 
                        cursor: "pointer",
                        fontSize: "16px"
                    }}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}