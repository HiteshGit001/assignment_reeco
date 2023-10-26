import { ReactElement } from "react"
import { Modal } from "../../styledComponents/CustomModal"

interface ICustomModal {
  body: ReactElement,
  isOpen: boolean,
  label: string,
}
const CustomModal = (props: ICustomModal) => {
  const { body, isOpen, label } = props;
  console.log(isOpen, "isOpen");
  const ModalDiv = Modal(isOpen, 100);
  return (
    <ModalDiv>
      <div className="popup">
        <div className="modal_body">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h3>{label}</h3>
            <p className="pointer">X</p>
          </div>
          {body}
        </div>
      </div>
    </ModalDiv>
  )
}

export default CustomModal