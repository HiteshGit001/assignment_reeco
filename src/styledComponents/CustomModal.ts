import styled from "styled-components";

export const Modal = (isOpen: boolean, height: number) => styled.div`
  display:${isOpen ? "block" : "none"};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  .popup{
    display:flex;
    justify-content:center;
    align-items:center;
    height:100%;
      .modal_body{
        padding:0.8rem;
        height:${height}px;
        background-color:white;
        border-radius:0.5rem;
    }
  }
`