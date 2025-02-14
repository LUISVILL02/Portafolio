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
          <label htmlFor="" className="text-tittleCard">{label}</label>
          <input  type={type} 
          className={`bg-inputForm h-[80px] border border-inputForm-border text-[20px] focus:outline-none p-[20px] 
            ${error ? 'border border-red-400':'focus:border-primary'}`}
          {...register(label,
            { required: `El ${label} requerido` })
          }
          />
      </div>
    )
  }
