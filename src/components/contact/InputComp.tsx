  import React from 'react';
  import { FieldError, useFormContext } from 'react-hook-form'



  interface InputProps {
      label: string;
      type: string;
      width: number;
      error: FieldError | undefined;
  }

  export const InputComp: React.FC<InputProps> = ({label, type, width, error}) => {

    const { register } = useFormContext();

    return (
      <div className={`flex flex-col w-[${width}%] justify-between`} >
          <label htmlFor="" className="3xl:text-tittleCard 2xl:text-tittleCard-xl">{label}</label>
          <input  type={type} 
          className={`bg-inputForm 3xl:h-[80px] 2xl:h-[50px] lg:h-[30px] h-[60px] w-[100%] border border-inputForm-border 
            3xl:text-[20px] 2xl:text-[15px] focus:outline-none p-[20px] 
            ${error ? 'border border-red-400':'focus:border-primary'}`}
          {...register(label,
            { required: `${label} requerido` })
          }
          />
          {error && <span className="text-red-400 lg:text-p-md text-p-lg">{error.message}</span>}
      </div>
    )
  }
