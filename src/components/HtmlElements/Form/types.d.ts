import React from "react";

export type IValues = string | number | boolean;

export interface IOption<Values = IValues> {
    label: React.ReactNode | JSX.Element,
    value: Values
}

type AppendComponentName<I, N> = I & {
    componentName: N,
}

export type IFormElms = AppendComponentName<IFormSwitches, "switch">
    | AppendComponentName<IFormSelect, "select">
    | AppendComponentName<IFormCheckbox, "checkbox">
    | AppendComponentName<React.InputHTMLAttributes<HTMLInputElement>, "input">



export interface IFormEntity {
    name : string,
    value? : IValues,
    onChange? : (event:React.ChangeEvent<HTMLInputElement|HTMLSelectElement>|string,value?:any) => void,
    disabled? : boolean,
    isError? : boolean,
    [index:string] : any
} 

export interface IFormCustom extends IFormEntity extends React.InputHTMLAttributes<HTMLInputElement> {
}

export interface IFormSwitches extends IFormEntity{
    label?: string,
    startLabel?: string,
}

export interface IFormCheckbox extends IFormEntity{
    options: IOption<Exclude<IValues,boolean>>[],
    isMulti?: boolean,
    optionsClass? : string;
}
export interface IFormRange extends IFormEntity{
    min?: number,
    max?: number,
    step?: number,
}