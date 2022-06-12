import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from 'react-router-dom'
import Formulario from '../../Styles/Formulario'

export function Form({setPessoa}) {
    const history = useHistory()

    const formSchema = yup.object().shape({
        name: yup.string().required("Digite seu nome!"),
        email: yup.string().required("Digite um email!").matches(/\S+@\S+\.\S+/, "E-mail inválido!"),
        password: yup.string().required("Digite uma senha!").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/, "Deve conter a menos 2 números, 1 letra minúscula, 1 letra maiúscula e 1 caractere especial. Total de 8 caracteres!"),
        confirmPassword: yup.string().oneOf([yup.ref("password")], "As senhas não coincidem!"),
        
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(formSchema),
      })
   
    function onSubmitFunction(data) {
        setPessoa(data)
        history.push('/sucesso')
    }
    
  return (
    <Formulario onSubmit={handleSubmit(onSubmitFunction)}>
        <input type="text" placeholder="Nome" autoFocus {...register("name")}/>
        {errors.name?.message}


        <input type="text" placeholder="E-mail" {...register("email")} />
        {errors.email?.message}


        <input type="password" placeholder="Senha" {...register("password")} />
        {errors.password?.message}


        <input type="password" placeholder="Confirme sua senha" {...register("confirmPassword")} />
        {errors.confirmPassword?.message}

        <button type="submit">Cadastrar</button>
    </Formulario>
  );
}
