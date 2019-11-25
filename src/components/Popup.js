import React from "react";
import styled from "@emotion/styled";

const PopupHref = styled.div`
  background: #ffe;
  width: 90vw;
  height: 90vh;
`;

const ClosePopup = styled.button`
    background: #e15a5a;
  outline: none;
  border: transparent;
  justify-content: center;
  width: 70px;
  border-radius: 20px;
  margin 5px; 
  padding: 0;
  box-shadow: 3px 6px 16px 0px #333;
  cursor: pointer;
  &:hover {
    background: transparent linear-gradient(180deg, #9127e9 0%, #e15a5a 100%) 0%
    0% no-repeat padding-box;
    box-shadow: 1px 1px 7px 0px rgba(102, 102, 102, 1);

  }
`;

export default function Popup(onClick) {
  return (
    <PopupHref>
      <ClosePopup onClick={closePopup} />
    </PopupHref>
  );
}
