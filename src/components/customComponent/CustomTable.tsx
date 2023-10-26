/* eslint-disable @typescript-eslint/no-explicit-any */

import { ChangeEventHandler } from "react";
import { labels } from "../../utils/labels";
import CustomInput from "./CustomInput";
import AppleGreenSmith from "../../assets/images/AppleGreenSmith.png";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai"

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
    { label: labels.missingProduct, color: "red" },
    { label: labels.quantityIsNotTheSame, color: "orange" },
    { label: labels.priceIsNotTheSame, color: "blue" }
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
                                  <AiOutlineCheck
                                    className="f_2"
                                    style={{
                                      color: ele.status === labels.approved
                                        ? "green"
                                        : "lightGray"
                                    }}
                                    onClick={() => handleAccept(ele.id)} />
                                  <AiOutlineClose
                                    style={{
                                      color: ele.status === labels.missing
                                        ? "red"
                                        : "lightGray"
                                    }}
                                    className="f_2" onClick={() => handleRegect(ele.id, ele.productName)} />
                                  <span className="pointer" onClick={() => handleEdit(ele.id, ele)}>Edit</span>
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