import React from 'react'
import { FormField,FormItem,FormLabel,FormControl, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Control } from 'react-hook-form'

interface shadecnField {
    name:string,
    placeholder:string,
    label?:string,
    control:Control<any>,
    type?:string,
    inputClass?:string
}

function ShadecnFormField({name,placeholder,label,control,type="text",inputClass}:shadecnField) {
  return (
  <FormField
        name={name}
        control={control}
        render={({field})=>(
            <FormItem className=''>
                <FormLabel>{label}</FormLabel>
                <FormControl>
                    <Input className={inputClass} placeholder={placeholder} type={type} {...field} />
                </FormControl>
                <FormMessage />
            </FormItem>
        )}
        />
)
}

export default ShadecnFormField