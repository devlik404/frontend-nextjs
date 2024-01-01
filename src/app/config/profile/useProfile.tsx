import { ApiData } from "@/app/hooks/api";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

interface IProfile {
  image?: string;
  displayName?: string;
  gender?: string;
  birthday: string;
  horoscope?: string;
  zodiac?: string;
  height?: string;  
  weight?: string;
}

export const UseProfile = () => {
  const [userProfile, setuserProfile] = useState<IProfile>({
    image:"",
    displayName:"",
    gender:"",
    birthday:"",
    horoscope:"",
    zodiac:"",
    height:"",
    weight:"",
  });
  console.log("userpro:",userProfile);
  
 const [newProfile,setNewProfile] = useState<IProfile>({
  image:"",
  displayName:"",
  gender:"",
  birthday:"",
  horoscope:"",
  zodiac:"",
  height:"",
  weight:"",
 });

  async function getProfile() {
    try {
      const response = await ApiData.get(`/profile/getProfile`, {
        headers: {
          Authorization: `
                Bearer ${localStorage.access_token}`,
        },
      });
      console.log("getprofile",response.data);
      
      setuserProfile(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  
  async function changeSubmitProfile(e:FormEvent) {
    try {
      const response = await ApiData.post(`/profile/createProfile`,newProfile, {
        headers: {
          Authorization: `
                Bearer ${localStorage.access_token}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  
  const changeHandlerProfile = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewProfile({
      ...newProfile,
      [name]: name === 'birthday' ? new Date(value) : value,
    });
  };
  



  return {userProfile,changeSubmitProfile,changeHandlerProfile,newProfile,getProfile};
};
