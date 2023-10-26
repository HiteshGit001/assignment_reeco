/* eslint-disable @typescript-eslint/no-explicit-any */

import { ChangeEventHandler } from "react";
import { InputDiv } from "../../styledComponents/CustomInput";

interface ICustomInput {
  label?: string,
  placeHolder?: string,
  value?: any,
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined,
  focus?: boolean,
}
const CustomInput = (props: ICustomInput) => {
  const { label, placeHolder, value, onChange = () => null, focus = false } = props;
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
        autoFocus={focus}
      />
    </InputDiv>
  )
}

export default CustomInput