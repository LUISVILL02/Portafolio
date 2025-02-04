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
            className="h-[670px] flex bg-background-form backdrop-blur-md p-[60px] justify-between items-center rounded-[20px]">
            <div className="w-[820px] flex flex-col gap-3">
                <div className="flex gap-3">
                    <InputComp label="Nombre" type="text" width={100}/>
                    <InputComp label="Apellido" type="text" width={100}/>
                </div>
                <InputComp label="Correo" type="email" width={100}/>
                <div className="flex flex-col">
                    <label htmlFor="" className="text-tittleCard">Mensaje</label>
                    <textarea 
                        className="bg-inputForm h-[235px] border border-inputForm-border text-[20px] focus:outline-none p-[20px] focus:border-primary resize-none"
                        {...methods.register("Mensaje", {required: "El mensaje es requerido"})}
                        ></textarea>
                </div>
            </div>
            <div className="h-[100%] flex flex-col gap-20 justify-end">
                <div className="[filter:drop-shadow(0_4px_100px_#6412d1)]">
                    <Email style={{
                        width: "333px", 
                        height: "323px", 
                        backgroundColor: "transparent", 
                        rotate: "13deg",
                        }}/>
                </div>
                <button 
                    disabled={loading}
                    className="transition-[background] duration-300 bg-secondary w-[291px] h-[81px] text-[35px] hover:bg-transparent hover:border hover:border-secondary "
                    type="submit"
                >
                    {loading ? "Enviando..." : "Enviar"}
                </button>
            </div>
        </form>
    </FormProvider>
  )
}
