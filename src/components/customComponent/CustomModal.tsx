import { ReactElement } from "react"
import { Modal } from "../../styledComponents/CustomModal"
import { AiOutlineClose } from "react-icons/ai"

interface ICustomModal {
  body: ReactElement,
  isOpen: boolean,
  label: string,
  close: () => void,
}
const CustomModal = (props: ICustomModal) => {
  const { body, isOpen, label, close } = props;
  console.log(isOpen, "isOpen");
  const ModalDiv = Modal(isOpen);
  return (
    <ModalDiv>
      <div className="popup">
        <div className="modal_body">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h3>{label}</h3>
            <AiOutlineClose className="pointer" onClick={close} />
          </div>
          {body}
        </div>
      </div>
    </ModalDiv>
  )
}

export default CustomModal