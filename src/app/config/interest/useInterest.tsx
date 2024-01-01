import { ApiData } from "@/app/hooks/api";
import { useState } from "react";

interface Iinterest {
  interest_name:string;
}

export const UseInterest = () => {
  
  const [interest, setInterest] = useState<Iinterest>({
    interest_name:"",
  });
  async function getInterest() {
    try {
      const response = await ApiData.get(`/profile/getInterest`, {
        headers: {
          Authorization: `
                    Bearer ${localStorage.access_token}`,
        },
      });
      console.log("getprofile", response.data);

      setInterest(response.data);
    } catch (error) {
      console.log(error);
    }
  }


  return { interest ,getInterest};
};
