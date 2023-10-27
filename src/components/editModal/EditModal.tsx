/* eslint-disable @typescript-eslint/no-explicit-any */

import { useReducer, useState } from "react";
import { Button } from "../../styledComponents/CustomButton";
import { labels } from "../../utils/labels";
import CustomInput from "../customComponent/CustomInput";
import { useDispatch } from "react-redux";
import { editSupplier } from "../../store/slice/supplierSlice";
import AppleGreenSmith from "../../assets/images/AppleGreenSmith.png"

interface IEditModal {
  item: any,
  close: () => void,
}
interface IUpdate {
  price: number,
  quantity: number,
  total: number,
  prePrice: number,
  preQuantity: number,
  preTotal: number,
}
const EditModal = (props: IEditModal) => {
  const { item, close = () => null } = props;

  const dispatch = useDispatch();

  const initialState = {
    price: item.price,
    quantity: item.quantity,
    total: item.total,
    prePrice: item.price,
    preQuantity: item.quantity,
    preTotal: item.total,
  };

  const reducer = (state: IUpdate, action: any) => {
    const { type, value } = action
    switch (type) {
      case "empty":
        return initialState
        break;
      case "price":
        return {
          ...state,
          price: Number(value),
          total: Number(value) * state.quantity,
          prePrice: state.price
        }
        break;
      case "quantityAdd":
        return {
          ...state,
          quantity: state.quantity + 1,
          total: state.price * (state.quantity + 1),
          preQuantity: state.quantity,
        }
        break;
      case "quantitySub":
        return {
          ...state,
          quantity: state.quantity - 1,
          total: state.price * (state.quantity - 1),
          preTotal: state.total
        }
        break;
      default: return state
    }
  }

  const [updatedValues, dispatchReducer] = useReducer(reducer, initialState);
  const [selectedTab, setSelectedTab] = useState(item.status || "");

  const reasons = [
    labels.missingProduct,
    labels.quantityIsNotTheSame,
    labels.priceIsNotTheSame,
  ]

  const handleUpdate = (value: string) => {
    dispatchReducer({ type: "price", value });
  }

  const handleUpdateQuantity = (type: string, value: number) => {
    if (value >= 0) {
      dispatchReducer({ type });
    }
  }

  const handleSave = (id: string) => {
    let status;
    if (item.quantity !== updatedValues.quantity && item.price !== updatedValues.price) {
      status = labels.priceAndQuantityUpdated;
    } else if (item.quantity !== updatedValues.quantity) {
      status = labels.quantityUpdated;
    } else if (item.price !== updatedValues.price) {
      status = labels.priceUpdated;
    }
    dispatch(editSupplier({ id, values: { ...item, ...updatedValues, status: selectedTab || status } }));
    dispatchReducer({ type: "empty" })
    close();
  }

  const handleSelect = (value: string) => {
    setSelectedTab(value)
  }

  return (
    <div>
      <h3>{item.productName}</h3>
      <p>{item.brand}</p>
      <div className="flex justify_between gap_1" style={{ flexWrap: "wrap" }}>
        <img style={{ height: "100px" }} src={AppleGreenSmith} />
        <div>
          <div className="flex align_center justify_between gap_1">
            <p style={{ padding: "0 2rem 0 0" }}>{labels.price}</p>
            <CustomInput
              focus
              onChange={(event) => handleUpdate(event.target.value)} value={updatedValues.price} />
            <span> /6 1lab</span>
          </div>
          <div className="flex align_center justify_between gap_1">
            <p>{labels.quantity}</p>
            <div className="flex gap_1">
              <Button onClick={() => handleUpdateQuantity("quantityAdd", updatedValues.quantity + 1)}>+</Button>
              <CustomInput value={updatedValues.quantity} />
              <Button onClick={() => handleUpdateQuantity("quantitySub", updatedValues.quantity - 1)}>-</Button>
            </div>
            <span> *6 1lb</span>
          </div>
          <div style={{ margin: "0.5rem 0 0 0", width: "50%" }} className="flex align_center justify_between gap_1">
            <p>{labels.total}</p>
            <p>$ {updatedValues.total}</p>
          </div>
        </div>
      </div>
      <div>
        <p className="f_m mt_1">{labels.chooseReason}</p>
        <div className="flex gap_1">
          {
            reasons.map((ele) => <p onClick={() => handleSelect(ele)} className={`${selectedTab === ele ? "bg_selected" : "bg_white"} not_selected`}>{ele}</p>)
          }
        </div>
      </div>
      <div className="flex justify_end gap_1 mt_1">
        <Button onClick={close}>{labels.cancel}</Button>
        <Button onClick={() => handleSave(item.id)}>{labels.send}</Button>
      </div>
    </div>
  )
}

export default EditModal