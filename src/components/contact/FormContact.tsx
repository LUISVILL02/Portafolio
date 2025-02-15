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

    const onSubmit: SubmitHandler<FormContact> = async (data: FormContact) => {
        setLoading(true);
        const send = await sendEmail(data);
        if(send.status === 200){
            setLoading(false);
            methods.reset();
        }
    }

  return (
    <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}
            className="h-[670px] max-2xl:h-[470px] flex bg-background-form backdrop-blur-md p-[60px] justify-between items-center rounded-[20px]">
            <div className="w-[820px] flex flex-col gap-3 max-2xl:w-[500px]">
                <div className="flex gap-3">
                    <InputComp label="Nombre" type="text" width={100} error={!!methods.formState.errors.Nombre}/>
                    <InputComp label="Apellido" type="text" width={100} error={!!methods.formState.errors.Apellido}/>
                </div>
                <InputComp label="Correo" type="email" width={100} error={!!methods.formState.errors.Correo}/>
                <div className="flex flex-col ">
                    <label htmlFor="" className="text-tittleCard max-2xl:text-tittleCard-lg">Mensaje</label>
                    <textarea 
                        className={`bg-inputForm h-[235px] max-2xl:h-[135px] border border-inputForm-border text-[20px] focus:outline-none p-[20px] resize-none
                            ${methods.formState.errors.Mensaje ? 'border border-red-400': 'focus:border-primary'}`}
                        {...methods.register("Mensaje", {required: "El mensaje es requerido"})}
                        ></textarea>
                </div>
            </div>
            <div className="h-[100%] flex flex-col gap-20 justify-end">
                <div className="[filter:drop-shadow(0_4px_50px_#6412d1)]">
                    <Email
                        className="w-[333px] h-[323px] bg-transparent rotate-[13deg] animation floating 3s ease-in-out infinite
                        max-2xl:w-[200px] max-2xl:h-[200px] 
                        " 
                        style={{
                        animation: "floating 3s ease-in-out infinite",
                        }}/>
                </div>
                <button 
                    disabled={loading}
                    className="transition-[background] duration-300 bg-secondary w-[291px] h-[81px] rounded-full 
                    text-[35px] hover:bg-primary hover:border hover:border-secondary 
                    max-2xl:w-[200px] max-2xl:h-[60px] max-2xl:text-h2-xs
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
