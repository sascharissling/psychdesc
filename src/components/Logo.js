import React from "react";
import styled from "@emotion/styled";

const AppName = styled.h1`
  margin: 5px;
  color: #eef1fa;
  font-size: 1.4rem;
`;

export default function Logo({ text }) {
  return <AppName>{text}</AppName>;
}
