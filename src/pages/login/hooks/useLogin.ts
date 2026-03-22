
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import APICall from "../../../network/APICall";
import { Const } from "../../../utils/Const";
import { ENDPOINTS } from "../../../network/Endpoints";
import { toast } from "react-toastify";

type LoginType = {
  username: string;
  password: string;
}

const loginSchema = yup.object({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

export const useLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const defaultValues = {
    username: '',
    password: ''
  }

  const { control, handleSubmit, formState: { errors } } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(loginSchema),
    defaultValues
  })
  console.log(errors)
  const onSubmit = (data: LoginType) => {
    const payload = {
      email: data.username,
      password: data.password
    }

    APICall(Const.METHODS.POST, payload, ENDPOINTS.AUTH.LOGIN).then((res: any) => {
      console.log(res)
      toast.success(res.message)
      navigate("/dashboard")
    }).catch((err) => {
      console.log(err)
      toast.error(err.message)
    })
  }
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  }
  return {
    control,
    handleSubmit,
    errors,
    onSubmit,
    showPassword,
    handleTogglePassword
  };
};
