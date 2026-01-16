import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

export default function RegistrationForm(){
  const [address,setAddress] = useState("");
  const [phone,setPhone] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e){
    e.preventDefault();
    try{
      await API.post("/registration",{address,phone});
      navigate("/donate");
    }catch{
      alert("Registration failed");
    }
  }

  return(
    <form onSubmit={handleSubmit}>
      <h2>NGO Registration</h2>
      <input placeholder="Address" onChange={(e)=>setAddress(e.target.value)} />
      <input placeholder="Phone" onChange={(e)=>setPhone(e.target.value)} />
      <button type="submit">Submit Registration</button>
    </form>
  );
}
