"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { ApiData, setAuthToken } from "../hooks/api";

interface IValidation {
  username: string;
  email: string;
  password: string;
}
interface IAuth {
  email: string;
  password: string;
}

export function UseAuth() {
  // Validation register
  const [validate, setValidate] = useState<IValidation>({
    username: "",
    email: "",
    password: "",
  });
  const [login, setLogin] = useState<IAuth>({
    email: "",
    password: "",
  });

  console.log("validate", validate);

  const changeHandlerValidate = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValidate({
      ...validate,
      [name]: value,
    });
    setLogin({
      ...login,
      [name]: value,
    });
  };

  const submitHandelRegister = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await ApiData.post("/account/sign-up", validate);

      console.log("register:", response.data);
    } catch (error) {
      console.log("Error submitting data", error);
    }
  };

  const submitHandelValidate = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await ApiData.post("/account/sign-in", login);

      localStorage.setItem("access_token", response.data.access_token);
      setAuthToken(localStorage.access_token);

      // Redirect to login page upon successful registration
      console.log("berhasil login", response);
      console.log("response login", response.data);
    } catch (error) {
      console.log("Error submitting data", error);
    }
  };

  return { changeHandlerValidate, submitHandelValidate, submitHandelRegister };
}
