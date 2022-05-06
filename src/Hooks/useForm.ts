import { useState } from "react";
import { IFormLogin } from "../Interfaces/IFormLogin";

export const useForm = (callback: any, initialValues: IFormLogin) => {
  const [form, setForm] = useState(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await callback();
  };

  return { handleChange, handleSubmit, form };
};
