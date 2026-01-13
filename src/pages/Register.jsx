import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();

  async function handleRegister(e){
    e.preventDefault();
    try{
      await API.post("/auth/register",{name,email,password});
      navigate("/login");
    }catch{
      alert("Registration failed");
    }
  }

  return(
    <form onSubmit={handleRegister}>
      <h2>Register</h2>
      <input placeholder="Name" onChange={(e)=>setName(e.target.value)} />
      <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
      <input placeholder="Password" type="password" onChange={(e)=>setPassword(e.target.value)} />
      <button type="submit">Register</button>
    </form>
  );
}
