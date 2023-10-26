/* eslint-disable @typescript-eslint/no-explicit-any */

import { ChangeEventHandler } from "react";
import { labels } from "../../utils/labels";
import CustomInput from "./CustomInput";
import AppleGreenSmith from "../../assets/images/AppleGreenSmith.png";

interface ICustomTable {
  data: any[];
  column: any[];
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  handleEdit: any,
  handleAccept: any,
  handleRegect: any,
}
const CustomTable = (props: ICustomTable) => {
  const {
    data,
    column,
    onChange,
    handleEdit = () => null,
    handleAccept = () => null,
    handleRegect = () => null,
  } = props;
  const dataKeys = column.map((ele) => ele?.key);

  const status = [
    { label: labels.approved, color: "green" },
    { label: labels.missing, color: "red" },
  ];

  return (
    <div>
      <CustomInput onChange={onChange} placeHolder={labels.search} />
      <table>
        <thead>
          <tr>
            {
              column.map((ele) => {
                return (
                  <>
                    <th>{ele.label}</th>
                  </>
                )
              })
            }
          </tr>
        </thead>
        <tbody>
          {
            data.map((ele) => {
              return (
                <tr>
                  {
                    dataKeys.map((item) => {
                      return (
                        <>
                          {
                            item === "img"
                              ? <td key={item}>
                                <img width={50} alt={item} src={AppleGreenSmith} />
                              </td>
                              : item === "action"
                                ? <td style={{ display: "flex", gap: "0.5rem" }}>
                                  <span onClick={() => handleAccept(ele.id)}>A</span>
                                  <span onClick={() => handleRegect(ele.id, ele.productName)}>X</span>
                                  <span onClick={() => handleEdit(ele.id)}>Edit</span>
                                </td>
                                : item === "status"
                                  ? <td>
                                    <div style={{
                                      display: "flex",
                                      justifyContent: "center",
                                    }}>
                                      <p style={{
                                        backgroundColor: `${ele?.[item] ? status?.find((statusColor) => statusColor.label === ele?.[item])?.color : "transperent"}`,
                                        borderRadius: "0.5rem",
                                        padding: "0.2rem",
                                        textAlign: "center",
                                        color: "white",
                                        maxWidth: "fit-content"
                                      }}>
                                        {ele?.[item]}
                                      </p>
                                    </div>
                                  </td>
                                  : <td key={item}>{ele?.[item]}</td>
                          }
                        </>
                      )
                    })
                  }
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default CustomTable