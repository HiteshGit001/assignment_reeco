/* eslint-disable @typescript-eslint/no-explicit-any */

import { ChangeEventHandler } from "react";
import { InputDiv } from "../../styledComponents/CustomInput";

interface ICustomInput {
  label?: string,
  placeHolder?: string,
  value?: any,
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined,
}
const CustomInput = (props: ICustomInput) => {
  const { label, placeHolder, value, onChange = () => null } = props;
  return (
    <InputDiv>
      {
        label
          ? <p>{label}</p>
          : <></>
      }
      <input
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
      />
    </InputDiv>
  )
}

export default CustomInput