import { useState } from "react";
import API from "../services/api";

export default function Donation(){
  const [amount,setAmount] = useState("");

  async function handleDonate(){
    try{
      const res = await API.post("/donation/create",{amount});
      window.location.href = res.data.paymentUrl;
    }catch{
      alert("Donation initiation failed");
    }
  }

  return(
    <div>
      <h2>Donate</h2>
      <input placeholder="Amount" onChange={(e)=>setAmount(e.target.value)} />
      <button onClick={handleDonate}>Proceed to Pay</button>
    </div>
  );
}
