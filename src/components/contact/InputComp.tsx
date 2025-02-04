  import React from 'react';
  import { useFormContext } from 'react-hook-form'


  interface InputProps {
      label: string;
      type: string;
      width: number;
  }

  export const InputComp: React.FC<InputProps> = ({label, type, width}) => {

    const { register } = useFormContext();

    return (
      <div className="flex flex-col" style={{ width: `${width}%` }}>
          <label htmlFor="" className="text-tittleCard">{label}</label>
          <input  type={type} 
          className="bg-inputForm h-[80px] border border-inputForm-border text-[20px] focus:outline-none p-[20px] focus:border-primary"
          {...register(label,
            { required: `El ${label} requerido` })
          }
          />
      </div>
    )
  }
