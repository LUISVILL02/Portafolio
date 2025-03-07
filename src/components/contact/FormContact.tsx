import { InputComp } from "./InputComp"
import { Email } from '../icons/social/Email';
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { sendEmail } from "../../service/contactEmail.service";
import { useState } from "react";

export interface FormContact{
    Nombre: string;
    Apellido: string;
    Correo: string;
    Mensaje: string;
    [key: string]: unknown;
}


export const FormContact = () => {

    const [loading, setLoading] = useState(false);

    const methods = useForm<FormContact>();
    const errors = methods.formState.errors;

    const onSubmit: SubmitHandler<FormContact> = async (data: FormContact) => {
        setLoading(true);
        const send = await sendEmail(data);
        if(send.status === 200){
            setLoading(false);
            methods.reset();
            //animación de enviado
        }
    }

  return (
    <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}
            className="3xl:h-[670px] 2xl:h-[470px] flex bg-background-form backdrop-blur-md 3xl:p-[60px] 2xl:p-[50px] 
            justify-between items-center 3xl:rounded-[20px] 2xl:rounded-[18px] xl:rounded-[15px] 
            lg:rounded-[10px] xl:w-[100%] lg:w-[100%] md:w-[80%] xl:p-[40px] lg:p-[30px] lg:flex-row lg:gap-5 flex-col p-10 rounded-[10px]">
            <div className="3xl:w-[820px] flex flex-col gap-3 2xl:w-[500px] md:w-[100%]">
                <div className="flex gap-3 flex-row">
                    <InputComp label="Nombre" type="text" width={100} error={errors.Nombre}/>
                    <InputComp label="Apellido" type="text" width={100} error={errors.Apellido}/>
                </div>
                <InputComp label="Correo" type="email" width={100} error={errors.Correo}/>
                <div className="flex flex-col ">
                    <label htmlFor="" className="3xl:text-tittleCard 2xl:text-tittleCard-2xl">Mensaje</label>
                    <textarea 
                        className={`bg-inputForm 3xl:h-[235px] 2xl:h-[135px] border border-inputForm-border 3xl:text-[20px] 2xl:text-[15px] focus:outline-none p-[20px] resize-none
                            ${errors.Mensaje ? 'border border-red-400': 'focus:border-primary'}`}
                        {...methods.register("Mensaje", {required: "Mensaje es requerido"})}
                        ></textarea>
                        {errors.Mensaje && <span className="text-red-400 lg:text-p-md text-p-lg">{errors.Mensaje.message}</span>}
                </div>
            </div>
            <div className="h-[100%] flex flex-col gap-20 justify-end xl:justify-center xl:items-center">
                <div className="[filter:drop-shadow(0_4px_50px_#6412d1)]">
                    <Email
                        className="3xl:w-[333px] 3xl:h-[323px] bg-transparent rotate-[13deg]
                        2xl:w-[200px] 2xl:h-[200px] xl:w-[170px] xl:h-[170px] lg:w-[130px] lg:h-[130px] lg:block hidden
                        " 
                        style={{
                        animation: "floating 3s ease-in-out infinite",
                        }}/>
                </div>
                <button 
                    disabled={loading}
                    className="transition-[background] duration-300 bg-secondary 3xl:w-[291px] 3xl:h-[90px] rounded-full 
                    3xl:text-[35px] hover:bg-primary hover:border hover:border-secondary 
                    2xl:w-[200px] 2xl:h-[60px] 2xl:text-button-2xl text-button-xl xl:w-[150px] xl:h-[50px] lg:w-[120px] lg:h-[50px] w-[140px] h-[60px]
                    "
                    type="submit"
                >
                    {loading ? "Enviando..." : "Enviar"}
                </button>
            </div>
        </form>
    </FormProvider>
  )
}
