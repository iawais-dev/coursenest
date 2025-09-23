import React from 'react'
import { FormField,FormItem,FormLabel,FormControl, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Control } from 'react-hook-form'

interface shadecnField {
    name:string,
    placeholder:string,
    label:string,
    control:Control<any>,
    type?:string
}

function ShadecnFormField({name,placeholder,label,control,type="text"}:shadecnField) {
  return (
  <FormField
        name={name}
        control={control}
        render={({field})=>(
            <FormItem>
                <FormLabel>{label}</FormLabel>
                <FormControl>
                    <Input placeholder={placeholder} type={type} {...field} />
                </FormControl>
                <FormMessage />
            </FormItem>
        )}
        />
)
}

export default ShadecnFormField