  import React from 'react';
  import { useFormContext } from 'react-hook-form'


  interface InputProps {
      label: string;
      type: string;
      width: number;
      error: boolean;
  }

  export const InputComp: React.FC<InputProps> = ({label, type, width, error}) => {

    const { register } = useFormContext();

    return (
      <div className={`flex flex-col w-[${width}%]`} >
          <label htmlFor="" className="text-tittleCard max-2xl:text-tittleCard-lg">{label}</label>
          <input  type={type} 
          className={`bg-inputForm h-[80px] max-2xl:h-[50px] max-2xl:w-[100%] border border-inputForm-border text-[20px] focus:outline-none p-[20px] 
            ${error ? 'border border-red-400':'focus:border-primary'}`}
          {...register(label,
            { required: `El ${label} requerido` })
          }
          />
      </div>
    )
  }
