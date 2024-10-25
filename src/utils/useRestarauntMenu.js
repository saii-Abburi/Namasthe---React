import { useEffect, useState } from "react";
import { API_URL } from "./constants";

const useRestarauntMenu = (resid) => {
    const [resInfo , setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async ()=>{
    const data = await fetch(API_URL+resid);
    const json = await data.json(); 
    setResInfo(json.data);
    console.log(json.data); 
  }
  return resInfo;
};

export default useRestarauntMenu;