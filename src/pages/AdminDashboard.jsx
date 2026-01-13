import { useEffect, useState } from "react";
import API from "../services/api";

export default function AdminDashboard(){
  const [stats,setStats] = useState({users:0,donations:0});

  useEffect(()=>{
    async function load(){
      const res = await API.get("/admin/stats");
      setStats(res.data);
    }
    load();
  },[]);

  return(
    <div>
      <h2>Admin Dashboard</h2>
      <p>Total Registrations: {stats.users}</p>
      <p>Total Donations: ₹{stats.donations}</p>
    </div>
  );
}
