import React from "react"
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Controller,Path, FieldValues, Control } from "react-hook-form"
interface FormFieldProps<T extends FieldValues>{
   control:Control<T>;
   name:Path<T>;
   label:string;
   placeholder?:string;
   type?: 'text' | 'password' | 'email' | 'file'
}
const FormField = ({control,name,label,placeholder,type="text"}:FormFieldProps<T>) => {
  return (
     <Controller name={name} control={control} render={({field})=>(
          <FormItem>
              <FormLabel>{label}</FormLabel>
              <FormControl>
                <Input placeholder={placeholder} type={type}
                {...field} />
              </FormControl>
      
              <FormMessage />
            </FormItem>
     )}     
     />
  )
}

export default FormField
