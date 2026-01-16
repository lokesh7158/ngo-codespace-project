import { useEffect, useState } from "react";
import API from "../services/api";

export default function UserDashboard(){
  const [registration,setRegistration] = useState(null);
  const [donations,setDonations] = useState([]);

  useEffect(()=>{
    async function load(){
      const reg = await API.get("/registration/me");
      const don = await API.get("/donation/me");
      setRegistration(reg.data);
      setDonations(don.data);
    }
    load();
  },[]);

  return(
    <div>
      <h2>User Dashboard</h2>

      <h3>My Registration</h3>
      {registration && (
        <p>{registration.address} | {registration.phone}</p>
      )}

      <h3>My Donations</h3>
      {donations.map(d=>(
        <p key={d.id}>{d.amount} - {d.status}</p>
      ))}
    </div>
  );
}
