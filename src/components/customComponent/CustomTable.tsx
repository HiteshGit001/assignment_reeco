/* eslint-disable @typescript-eslint/no-explicit-any */

import { ChangeEventHandler } from "react";
import { labels } from "../../utils/labels";
import CustomInput from "./CustomInput";
import AppleGreenSmith from "../../assets/images/AppleGreenSmith.png";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai"
import { GridBox } from "../../styledComponents/GridBox";

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

  const Grid = GridBox(3)

  const dataKeys = column.map((ele) => ele?.key);

  const status = [
    { label: labels.approved, color: "green" },
    { label: labels.missing, color: "red" },
    { label: labels.missingProduct, color: "red" },
    { label: labels.quantityIsNotTheSame, color: "orange" },
    { label: labels.priceIsNotTheSame, color: "blue" },
    { label: labels.priceUpdated, color: "lightGreen" },
    { label: labels.quantityUpdated, color: "lightBlue" },
    { label: labels.priceAndQuantityUpdated, color: "limeGreen" }
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
                                ? <td className="bg_lightgray">
                                  <Grid>
                                    <AiOutlineCheck
                                      className="f_2"
                                      style={{
                                        color: ele.status === labels.approved
                                          ? "green"
                                          : "gray"
                                      }}
                                      onClick={() => handleAccept(ele.id)} />
                                    <AiOutlineClose
                                      style={{
                                        color: ele.status === labels.missing
                                          ? "red"
                                          : "gray"
                                      }}
                                      className="f_2" onClick={() => handleRegect(ele.id, ele.productName)} />
                                    <span className="pointer" onClick={() => handleEdit(ele.id, ele)}>Edit</span>
                                  </Grid>
                                </td>
                                : item === "status"
                                  ? <td className="bg_lightgray">
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
                                  : <td key={item}>
                                    <p>
                                      {ele?.[item]}
                                    </p>
                                    {ele.prePrice !== 0 && ele.prePrice !== ele.price && item === "price" && <p className="dashed_text">{ele.prePrice}</p>}
                                    {ele.preQuantity !== 0 && ele.preQuantity !== ele.quantity && item === "quantity" && <p className="dashed_text">{ele.preQuantity}</p>}
                                    {ele.preTotal !== 0 && ele.preTotal !== ele.total && item === "total" && <p className="dashed_text">{ele.preTotal}</p>}
                                  </td>
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