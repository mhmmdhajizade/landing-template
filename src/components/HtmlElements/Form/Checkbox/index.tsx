import { useCallback } from "react";
import { IFormCheckbox,IValues } from "../types";
import { Group, Checkbox } from "./style";

const CheckBoxCustom = ({
  name,
  value,
  disabled,
  isError,
  onChange,
  options,
  isMulti,
  optionsClass
}: IFormCheckbox) => {

  let _value = (typeof value !== "undefined") ? Array.isArray(value) ? value : [value] : []; 

  const _onClick = useCallback((value:IValues)=>{
    if(!onChange) return;
    const isChekead = _value.includes(value);
      if(isMulti){
        if (isChekead) {
          onChange(name,_value.filter(_item => _item !== value))
        } else {
          onChange(name,[..._value, value])
        }
      }else{
        if (!isChekead) {
          onChange(name,value)
        } else {
          onChange(name,undefined)
        }
      }
  },[_value,name])


  return (
    <Group>
      {options.map((item, index) => (
        <Checkbox
          key={index}
          $isActive={_value.includes(item.value)}
          $bgColor={{
            name: "light",
          }}
          $textColor={{
            name: "text",
          }}
          $borderColor={{
            name : isError ? "red" :"grey"
          }}
          className={optionsClass}
          disabled={disabled}
          onClick={()=> _onClick(item.value)}
        >
          {item.label}
        </Checkbox>
      ))}
    </Group>
  );
};

export default CheckBoxCustom;
