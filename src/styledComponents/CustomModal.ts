import styled from "styled-components";

export const Modal = (isOpen: boolean) => styled.div`
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
    overflow-x: scroll;
      .modal_body{
        padding:1.5rem;
        height:fit-content;
        background-color:white;
        border-radius:0.5rem;
    }
  }
`